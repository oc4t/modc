import { useState, useEffect, useCallback } from 'react';
import './App.css';
import {
  TextareaAutosize, InputLabel, Select, MenuItem, Container, Button, FormControl, Box, Typography, LinearProgress, Tooltip
} from '@mui/material';
import { downloadMods } from './Download';
import { ItemVersions } from './Versions';

const ModC = () => {
  const [version, setVersion] = useState("1.21.1");
  const [loader, setLoader] = useState("fabric");
  const [mods, setMods] = useState([]);
  const [resourcepacks, setResourcepacks] = useState([]);
  const [modDetails, setModDetails] = useState([]);
  const [resourcepacksDetails, setResourcepackDetails] = useState([]);
  const [error, setError] = useState(null);
  const [modVersions, setModVersions] = useState({});
  const [resourcepackVersions, setResourcepackVersions] = useState({});
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(-1);
  const [loaded, setLoaded] = useState(false);

  const encodeItems = useCallback((items, selectedVersions) =>
    items.map(item => {
      const slug = item.trim();
      return selectedVersions[slug]
        ? `${encodeURIComponent(slug)}:${encodeURIComponent(selectedVersions[slug])}`
        : encodeURIComponent(slug);
    }).join(','), []);

  const decodeItems = useCallback((encodedString) => {
    const itemEntries = encodedString.split(',').map(entry => entry.split(':'));
    return {
      items: itemEntries.map(([slug]) => decodeURIComponent(slug)),
      versions: itemEntries.reduce((acc, [slug, version]) => {
        if (version) acc[decodeURIComponent(slug)] = decodeURIComponent(version);
        return acc;
      }, {})
    };
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const versionParam = searchParams.get('version');
    const loaderParam = searchParams.get('loader');
    const modsParam = searchParams.get('mods');
    const resourcepacksParam = searchParams.get('resourcepacks');

    if (versionParam) setVersion(versionParam);
    if (loaderParam) setLoader(loaderParam);

    if (modsParam) {
      const { items, versions } = decodeItems(modsParam);
      setMods(items);
      setModVersions(versions);
    }

    if (resourcepacksParam) {
      const { items, versions } = decodeItems(resourcepacksParam);
      setResourcepacks(items);
      setResourcepackVersions(versions);
    }
  }, [decodeItems]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('version', version);
    searchParams.set('loader', loader);
    if (mods.length) {
      searchParams.set('mods', encodeItems(mods, modVersions));
    } else {
      searchParams.delete('mods');
    }
  
    if (resourcepacks.length) {
      searchParams.set('resourcepacks', encodeItems(resourcepacks, resourcepackVersions));
    } else {
      searchParams.delete('resourcepacks'); 
    }
  
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams}`);
    setLoaded(true)
  }, [mods, resourcepacks, modVersions, resourcepackVersions, version, loader, encodeItems]);

  useEffect(() => {
    fetchDetails();
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      setModVersions({});
      setResourcepackVersions({});
      setError(null);
    }
  }, [version, loader]);

  const fetchDetails = useCallback(async () => {
    const fetchItemDetails = async (items, apiUrl, setDetails, setSelectedVersions) => {
      if (!items.length) return;

      setError(null);

      const slugs = items.map(slug => slug.trim());
      const slugString = JSON.stringify(slugs);

      try {
        const response = await fetch(`https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(slugString)}`);
        if (!response.ok) throw new Error(`Failed to fetch details for ${items}`);
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

        const updatedVersions = { ...modVersions };
        filteredDetails.forEach(item => {
          if (!modVersions[item.slug]) {
            updatedVersions[item.slug] = item.versions[0].id;
          }
        });
        setSelectedVersions(updatedVersions);
      } catch (error) {
        setError(error.message);
      }
    };

    await fetchItemDetails(mods, slug => `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`, setModDetails, setModVersions);
    await fetchItemDetails(resourcepacks, slug => `https://api.modrinth.com/v2/project/${slug}/version`, setResourcepackDetails, setResourcepackVersions);
  }, [mods, loader, version, modVersions, resourcepacks]);

  const handleRemove = (setter, detailSetter, versionSetter, slug) => {
    setter(prev => prev.filter(item => item !== slug) );
    detailSetter(prev => prev.filter(detail => detail.slug !== slug));
    versionSetter(prev => {
      const updated = { ...prev };
      delete updated[slug];
      return updated;
    });
  };

  return (
    <Container sx={{ height: '100vh', padding: '25px'}}>
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
              onChange={(e) => setVersion(e.target.value)}
            >
              {["1.21.1", "1.21", "1.20.4", "1.20.3", "1.20.2", "1.20.1", "1.20","1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19", "1.18.2", "1.18.1", "1.18","1.17.1", "1.17", "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16", "1.15.2", "1.15.1", "1.15", "1.14.4", "1.12.2", "1.8.9"].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="loader-label">Loader</InputLabel>
            <Select
              labelId="loader-label"
              id="loader"
              value={loader}
              label="Loader"
              onChange={(e) => setLoader(e.target.value)}
            >
              {["fabric", "forge", "quilt", "neoforge"].map(l => <MenuItem key={l} value={l}>{l}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
        <TextareaAutosize
          placeholder='Enter mods (comma separated)'
          value={mods.join(',')}
          onChange={(e) => setMods(e.target.value.split(',').map(item => item.trim()))}
          style={{ width: '58%', padding: '10px', borderRadius: '4px', fontSize: '16px', backgroundColor: '#494949', color: '#fff' }}
        />
        <TextareaAutosize
          placeholder='Enter resourcepacks (comma separated)'
          value={resourcepacks.join(',')}
          onChange={(e) => setResourcepacks(e.target.value.split(',').map(item => item.trim()))}
          style={{ width: '58%', padding: '10px', borderRadius: '4px', fontSize: '16px', backgroundColor: '#494949', color: '#fff' }}
        />
        <Tooltip title="Download all mods and resourcepacks of the selected version">
          <Button
            variant='contained'
            sx={{ mt: 2, width: '100%', maxWidth: '600px' }}
            onClick={() => downloadMods(mods.join(','), modVersions, loader, version, resourcepacks.join(','), resourcepackVersions, setDownloading, setProgress, setError)}
            disabled={downloading}
          >
            {downloading ? 'Downloading...' : 'Download'}
          </Button>
        </Tooltip>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
          hidden={!downloading}
        />
        {error && <Typography variant="body1" color="error">{error}</Typography>}
        <Tooltip title="Update mod/resourcepack details">
          <Button
            variant='contained'
            sx={{ mt: 4, width: '100%', maxWidth: '600px' }}
            onClick={fetchDetails}
          >
            Update
          </Button>
        </Tooltip>

        {mods.length > 0 ? (<>
          <Typography variant="h4" sx={{ marginTop: '30px' }}>Mods</Typography>
          <ItemVersions
            itemDetails={modDetails}
            selectedVersions={modVersions}
            handleVersionSelect={(slug, newVersion) =>
              setModVersions(prev => ({
                ...prev,
                [slug]: newVersion
              }))
            }
            handleRemoveMod={(slug) => handleRemove(setMods, setModDetails, setModVersions, slug)}
          /></>) : null}
        {resourcepacks.length > 0 ? (<>
          <Typography variant="h4" sx={{ marginTop: '30px' }}>Resourcepacks</Typography>
          <ItemVersions
            itemDetails={resourcepacksDetails}
            selectedVersions={resourcepackVersions}
            handleVersionSelect={(slug, newVersion) =>
              setResourcepackVersions(prev => ({
                ...prev,
                [slug]: newVersion
              }))
            }
            handleRemoveMod={(slug) => handleRemove(setResourcepacks, setResourcepackDetails, setResourcepackVersions, slug)}
          /></>) : null}
      </Box>
    </Container>
  );
};

export default ModC;
