import { useState, useEffect } from 'react';
import './App.css';
import {
  TextareaAutosize,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Button,
  FormControl,
  Box,
  Typography,
  LinearProgress
} from '@mui/material';
import { downloadMods } from './Download';
import { ItemVersions } from './Versions';

const ModC = () => {
  const [version, setVersion] = useState("1.21.1");
  const [loader, setLoader] = useState("fabric");
  const [mods, setMods] = useState("");
  const [resourcepacks, setResourcepacks] = useState("");
  const [modDetails, setModDetails] = useState([]);
  const [resourcepacksDetails, setResourcepackDetails] = useState([]);
  const [error, setError] = useState(null);
  const [selectedVersions, setSelectedVersions] = useState({});
  const [selectedResourcepackVersions, setSelectedResourcepackVersions] = useState({});
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(-1);

  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const handleStateReset = () => {
    setSelectedVersions({});
    setSelectedResourcepackVersions({});
    setError(null);
  };

  const encodeItems = (items, selectedVersions) =>
    items.split(',').map(item => {
      const slug = item.trim();
      return selectedVersions[slug] 
        ? `${encodeURIComponent(slug)}:${encodeURIComponent(selectedVersions[slug])}` 
        : encodeURIComponent(slug);
    }).join(',');

  const decodeItems = (encodedString) => {
    const itemEntries = encodedString.split(',').map(entry => entry.split(':'));
    return {
      items: itemEntries.map(([slug]) => decodeURIComponent(slug)).join(','),
      versions: itemEntries.reduce((acc, [slug, version]) => {
        if (version) acc[decodeURIComponent(slug)] = decodeURIComponent(version);
        return acc;
      }, {})
    };
  };

  const updateUrlParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('version', version);
    searchParams.set('loader', loader);

    mods.trim()
      ? searchParams.set('mods', encodeItems(mods, selectedVersions))
      : searchParams.delete('mods');

    resourcepacks.trim()
      ? searchParams.set('resourcepacks', encodeItems(resourcepacks, selectedResourcepackVersions))
      : searchParams.delete('resourcepacks');

    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setVersion(searchParams.get('version') || "1.21.1");
    setLoader(searchParams.get('loader') || "fabric");

    if (searchParams.get('mods')) {
      const { items, versions } = decodeItems(searchParams.get('mods'));
      setMods(items);
      setSelectedVersions(versions);
    }

    if (searchParams.get('resourcepacks')) {
      const { items, versions } = decodeItems(searchParams.get('resourcepacks'));
      setResourcepacks(items);
      setSelectedResourcepackVersions(versions);
    }

    setInitialLoadComplete(true);
  }, []);

  useEffect(() => {
    if (initialLoadComplete) {
      fetchDetails();
    }
  }, [initialLoadComplete]);

  useEffect(updateUrlParams, [version, loader, mods, resourcepacks, selectedVersions, selectedResourcepackVersions]);

  const fetchDetails = async () => {
    const fetchItemsDetails = async (items, apiUrl, setDetails, setSelectedVersions) => {
      if (!items) return;
      setError(null);

      const slugs = items.split(',').map(slug => slug.trim());
      const slugString = JSON.stringify(slugs);

      try {
        const response = await fetch(`https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(slugString)}`);
        if (!response.ok) throw new Error(`Failed to fetch ${items} details`);
        const data = await response.json();

        const details = await Promise.all(data.map(async (item) => {
          const versionResponse = await fetch(apiUrl(item.slug));
          if (!versionResponse.ok) throw new Error(`Failed to fetch versions for ${item.slug}`);
          const versionData = await versionResponse.json();
          if (versionData.length === 0) {
            setError(`${item.slug} doesn't have a version for ${version}`);
            return null;
          }
          return {
            slug: item.slug,
            icon_url: item.icon_url,
            type: 'mod',
            versions: versionData.map(v => ({
              id: v.id,
              version_number: v.version_number,
              download_url: v.files[0]?.url
            }))
          };
        }));

        const filteredDetails = details.filter(Boolean);
        setDetails(filteredDetails);

        const updatedVersions = { ...selectedVersions };
        filteredDetails.forEach(item => {
          if (!selectedVersions[item.slug]) {
            updatedVersions[item.slug] = item.versions[0].id;
          }
        });
        setSelectedVersions(updatedVersions);
      } catch (error) {
        setError(error.message);
      }
    };

    await fetchItemsDetails(mods, slug => `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`, setModDetails, setSelectedVersions);
    await fetchItemsDetails(resourcepacks, slug => `https://api.modrinth.com/v2/project/${slug}/version`, setResourcepackDetails, setSelectedResourcepackVersions);
  };

  // Fix: Properly update the version for each mod/resourcepack
  const handleVersionSelect = (slug, newVersion) => {
    setSelectedVersions(prev => ({
      ...prev,
      [slug]: newVersion
    }));
  };

  const handleResourcepackVersionSelect = (slug, newVersion) => {
    setSelectedResourcepackVersions(prev => ({
      ...prev,
      [slug]: newVersion
    }));
  };

  const handleChange = (type, value) => {
    type === 'version' ? setVersion(value) : setLoader(value);
    handleStateReset();
  };

  const handleItemChange = (setter) => (e) => {
    setter(e.target.value);
    handleStateReset();
  };

  const handleRemove = (type, slug, setter, versionsSetter) => {
    const updatedItems = (type || "").split(',').filter(item => item.trim() !== slug).join(',');
    setter(updatedItems);

    const updatedVersions = { ...versionsSetter };
    delete updatedVersions[slug];
    versionsSetter(updatedVersions);
  };

  return (
    <Container sx={{ height: '100vh', padding: '25px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Typography variant="h2">Modrinth Modpack Downloader</Typography>
        <Typography sx={{ textAlign: "center" }}>
          Easily create, update, and share modpacks without extra programs.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', width: '60%' }}>
          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="version-label">Version</InputLabel>
            <Select
              labelId="version-label"
              id="version"
              value={version}
              label="Version"
              onChange={(e) => handleChange('version', e.target.value)}
            >
              {["1.21.1", "1.21", "1.20.4", "1.20.3", "1.20.2", "1.20.1", "1.20","1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19", "1.18.2", "1.18.1", "1.18","1.17.1", "1.17", "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16", "1.15.2", "1.15.1", "1.15", "1.14.4", "1.12.2"].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="loader-label">Loader</InputLabel>
            <Select
              labelId="loader-label"
              id="loader"
              value={loader}
              label="Loader"
              onChange={(e) => handleChange('loader', e.target.value)}
            >
              {["fabric", "forge", "quilt"].map(l => <MenuItem key={l} value={l}>{l}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>

        <TextareaAutosize
          placeholder='Enter mods (comma separated)'
          value={mods}
          onChange={handleItemChange(setMods)}
          style={{ width: '58%', padding: '10px', borderRadius: '4px', fontSize: '16px', backgroundColor: '#494949', color: '#fff' }}
        />
        <TextareaAutosize
          placeholder='Enter resourcepacks (comma separated)'
          value={resourcepacks}
          onChange={handleItemChange(setResourcepacks)}
          style={{ width: '58%', padding: '10px', borderRadius: '4px', fontSize: '16px', backgroundColor: '#494949', color: '#fff' }}
        />

        <Button
          variant='contained'
          sx={{ mt: 2, width: '100%', maxWidth: '600px' }}
          onClick={() => downloadMods(mods, selectedVersions, loader, version, resourcepacks, selectedResourcepackVersions, setDownloading, setProgress, setError)}
          disabled={downloading}
        >
          {downloading ? 'Downloading...' : 'Download'}
        </Button>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
          hidden={!downloading}
        />

        {error && <Typography variant="body1" color="error">{error}</Typography>}

        <Button
          variant='contained'
          sx={{ mt: 4, width: '100%', maxWidth: '600px' }}
          onClick={fetchDetails}
        >
          Update
        </Button>

        <Typography variant="h4" sx={{ marginTop: '30px' }}>Mods</Typography>
        <ItemVersions
          itemDetails={modDetails}
          selectedVersions={selectedVersions}
          handleVersionSelect={handleVersionSelect}
          handleRemoveMod={(slug) => handleRemove(mods, slug, setMods, setSelectedVersions)}
        />
        <Typography variant="h4" sx={{ marginTop: '30px' }}>Resourcepacks</Typography>
        <ItemVersions
          itemDetails={resourcepacksDetails}
          selectedVersions={selectedResourcepackVersions}
          handleVersionSelect={handleResourcepackVersionSelect}
          handleRemoveMod={(slug) => handleRemove(resourcepacks, slug, setResourcepacks, setSelectedResourcepackVersions)}
        />
      </Box>
    </Container>
  );
};

export default ModC;
