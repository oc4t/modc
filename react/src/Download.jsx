import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const downloadMods = (mods, selectedVersions, loader, version, resourcepacks = '', selectedResourceVersions = {}, setDownloading, setProgress, setError) => {
  setDownloading(true);

  const modSlugs = mods ? mods.split(',').map(mod => mod.trim()) : [];
  const resourcepackSlugs = resourcepacks ? resourcepacks.split(',').map(pack => pack.trim()) : [];

  let zipMods = new JSZip();
  let zipResourcePacks = new JSZip();
  let completedCount = 0;
  let totalItems = 0;

  const downloadItem = (slug, versionId, type, zip) => {
    const fetchUrl = versionId
      ? `https://api.modrinth.com/v2/version/${versionId}`
      : `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`;

    return fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch Modrinth API: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(itemDetails => {
        const itemInfo = Array.isArray(itemDetails) ? itemDetails[0] : itemDetails;
        if (!itemInfo || !itemInfo.files || itemInfo.files.length === 0) {
          throw new Error(`Invalid response from Modrinth API for ${type}: ${slug}`);
        }

        const itemDownloadUrl = itemInfo.files[0].url;
        const itemName = itemInfo.files[0].filename;

        return fetch(itemDownloadUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to download ${type}: ${itemName}`);
            }
            return response.blob();
          })
          .then(blob => zip.file(itemName, blob))
          .then(() => {
            completedCount++;
            setProgress((completedCount / totalItems) * 100);
          });
      })
      .catch(error => {
        console.error(error);
        setError(`Error downloading ${type}: ${slug}`);
      });
  };

  const modPromises = modSlugs.map(modSlug => {
    const versionId = selectedVersions[modSlug];
    return downloadItem(modSlug, versionId, 'mod', zipMods);
  });

  const resourcePackPromises = resourcepackSlugs.map(packSlug => {
    const versionId = selectedResourceVersions[packSlug];
    return downloadItem(packSlug, versionId, 'resource pack', zipResourcePacks);
  });

  if (modSlugs.length > 0) {
    totalItems += modSlugs.length;
  }
  if (resourcepackSlugs.length > 0) {
    totalItems += resourcepackSlugs.length;
  }

  const modZipPromise = modSlugs.length > 0
    ? Promise.all(modPromises.map(p => p.catch(() => null))).then(() => zipMods.generateAsync({ type: 'blob' }))
    : Promise.resolve(null);

  const resourcePackZipPromise = resourcepackSlugs.length > 0
    ? Promise.all(resourcePackPromises.map(p => p.catch(() => null))).then(() => zipResourcePacks.generateAsync({ type: 'blob' }))
    : Promise.resolve(null);

  Promise.all([modZipPromise, resourcePackZipPromise])
    .then(([modContent, resourcePackContent]) => {
      if (modContent) saveAs(modContent, 'mods.zip');
      if (resourcePackContent) saveAs(resourcePackContent, 'resourcepacks.zip');
    })
    .catch(error => console.error('Error generating zip:', error))
    .finally(() => {
      setProgress(0);
      setDownloading(false);
    });
};
