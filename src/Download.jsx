import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const downloadMods = (
  mods, 
  selectedVersions, 
  loader, 
  version, 
  resourcepacks = '', 
  selectedResourceVersions = {}, 
  setDownloading, 
  setProgress, 
  setError
) => {
  setDownloading(true);
  setError(null); // Reset any previous errors

  const zip = { mods: new JSZip(), resourcepacks: new JSZip() };
  
  // Step 1: Ensure mods and resourcepacks don't contain empty slugs
  const items = {
    mods: mods ? mods.split(',').map(mod => mod.trim()).filter(Boolean) : [],
    resourcepacks: resourcepacks ? resourcepacks.split(',').map(pack => pack.trim()).filter(Boolean) : []
  };

  const totalItems = items.mods.length + items.resourcepacks.length;
  let completedCount = 0;

  const updateProgress = () => {
    completedCount++;
    setProgress((completedCount / totalItems) * 100);
  };

  const downloadItem = async (slug, versionId, type) => {
    try {
      // Check if the slug is empty and skip if so
      if (!slug) throw new Error(`Invalid ${type}: Empty slug`);

      // Step 2: Get version details
      const fetchUrl = versionId
        ? `https://api.modrinth.com/v2/version/${versionId}`
        : `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`;

      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error(`Failed to fetch ${type} for ${slug}: ${response.statusText}`);

      const itemDetails = await response.json();
      const itemInfo = Array.isArray(itemDetails) ? itemDetails[0] : itemDetails;
      const { files } = itemInfo || {};

      if (!files || !files.length) throw new Error(`No files found for ${slug}`);

      // Step 3: Download the file
      const { url, filename } = files[0];
      const fileResponse = await fetch(url);
      if (!fileResponse.ok) throw new Error(`Failed to download ${type}: ${filename}`);

      const blob = await fileResponse.blob();
      zip[type].file(filename, blob);

      // Update progress after each successful download
      updateProgress();
    } catch (error) {
      console.error(`Error downloading ${type} for ${slug}:`, error);
      setError(prevError => (prevError ? `${prevError}\n` : '') + `Error downloading ${type}: ${slug}, ${error.message}`);
    }
  };

  const createDownloadPromises = (type, slugs, versions) =>
    slugs.map(slug => downloadItem(slug, versions[slug], type));

  const modPromises = createDownloadPromises('mods', items.mods, selectedVersions);
  const resourcePackPromises = createDownloadPromises('resourcepacks', items.resourcepacks, selectedResourceVersions);

  Promise.all([
    Promise.all(modPromises).then(() => zip.mods.generateAsync({ type: 'blob' })),
    Promise.all(resourcePackPromises).then(() => zip.resourcepacks.generateAsync({ type: 'blob' }))
  ])
    .then(([modZip, resourcePackZip]) => {
      // Step 4: Trigger download
      if (modZip) saveAs(modZip, 'mods.zip');
      if (resourcePackZip) saveAs(resourcePackZip, 'resourcepacks.zip');
    })
    .catch((error) => {
      console.error('Error generating zip:', error);
      setError(`Error generating zip: ${error.message}`);
    })
    .finally(() => {
      setProgress(0);
      setDownloading(false);
    });
};
