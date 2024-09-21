import React, { useState, useEffect } from 'react';
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
import { ModVersions } from './Versions';

const ModC = () => {
  const [version, setVersion] = useState("1.21.1");
  const [loader, setLoader] = useState("fabric");
  const [mods, setMods] = useState("");
  const [resourcepacks, setResourcepacks] = useState("");
  const [modDetails, setModDetails] = useState([]);
  const [resourcepacksDetails, setResourcepackDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modError, setModError] = useState(null);
  const [selectedVersions, setSelectedVersions] = useState({});
  const [selectedResourcepackVersions, setSelectedResourcepackVersions] = useState({});
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(-1);

  const encodeMods = (mods, selectedVersions) => {
    return mods.split(',').map(mod => mod.trim()).map(modSlug => {
      return selectedVersions[modSlug] ? `${encodeURIComponent(modSlug)}:${encodeURIComponent(selectedVersions[modSlug])}` : encodeURIComponent(modSlug);
    }).join(',');
  };
  
  const decodeMods = (encodedString) => {
    const modEntries = encodedString.split(',').map(entry => entry.split(':'));
    return {
      mods: modEntries.map(([modSlug]) => decodeURIComponent(modSlug)).join(','),
      versions: modEntries.reduce((acc, [modSlug, versionId]) => {
        if (versionId) acc[decodeURIComponent(modSlug)] = decodeURIComponent(versionId);
        return acc;
      }, {})
    };
  };  

  const updateUrlParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('version', version);
    searchParams.set('loader', loader);
    if (mods && mods.trim()) {
      searchParams.set('mods', encodeMods(mods, selectedVersions));
    } else {
      searchParams.delete('mods');
    }
    if (resourcepacks && resourcepacks.trim()) {
      searchParams.set('resourcepacks', encodeMods(resourcepacks, selectedResourcepackVersions));
    } else {
      searchParams.delete('resourcepacks');
    }
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
  };
  

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialVersion = searchParams.get('version') || "1.21.1";
    const initialLoader = searchParams.get('loader') || "fabric";
    const combinedModsAndVersions = searchParams.get('mods') || "";
    const combinedResourcepacksAndVersions = searchParams.get('resourcepacks') || "";

    setVersion(initialVersion);
    setLoader(initialLoader);

    if (combinedModsAndVersions) {
      const { mods, versions } = decodeMods(combinedModsAndVersions);
      setMods(mods);
      setSelectedVersions(versions);
    }

    if (combinedResourcepacksAndVersions) {
      const { mods: resourcepacks, versions: resourceVersions } = decodeMods(combinedResourcepacksAndVersions);
      setResourcepacks(resourcepacks);
      setSelectedResourcepackVersions(resourceVersions);
    }
  }, []);

  useEffect(() => {
    updateUrlParams();
  }, [version, loader, mods, resourcepacks, selectedVersions, selectedResourcepackVersions]);

  useEffect(() => {
    const fetchDetails = async (type, apiUrl, setDetails, setSelectedVersions, setError) => {
      if (!type) return;
      setLoading(true);
      setError(null);
      const slugs = type.split(',').map(slug => slug.trim());
      const slugString = JSON.stringify(slugs);

      try {
        const response = await fetch(`https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(slugString)}`);
        if (!response.ok) throw new Error(`Failed to fetch ${type} details`);
        const data = await response.json();

        const updatedDetails = [];
        const updatedVersions = { ...selectedVersions };

        for (const item of data) {
          try {
            const versionResponse = await fetch(apiUrl(item.slug));
            if (!versionResponse.ok) throw new Error(`Failed to fetch versions for ${item.slug}`);
            const versionData = await versionResponse.json();

            if (versionData.length === 0) {
              setError(`No available versions found for ${type.slice(0, -1)}: ${item.slug}`);
              continue;
            }

            updatedDetails.push({
              slug: item.slug,
              icon_url: item.icon_url,
              versions: versionData.map(({ id, version_number, files }) => ({
                id,
                version_number,
                download_url: files[0]?.url
              }))
            });

            if (!selectedVersions[item.slug] && versionData.length > 0) {
              updatedVersions[item.slug] = versionData[0].id;
            }
          } catch (error) {
            console.error(`Error fetching ${type.slice(0, -1)} versions:`, error);
            setError(`Error fetching versions for ${type.slice(0, -1)}: ${item.slug}`);
          }
        }

        setDetails(updatedDetails);
        setSelectedVersions(updatedVersions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails(mods, slug => `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`, setModDetails, setSelectedVersions, setModError);
    fetchDetails(resourcepacks, slug => `https://api.modrinth.com/v2/project/${slug}/version`, setResourcepackDetails, setSelectedResourcepackVersions, setModError);
  }, [mods, version, loader, resourcepacks]);

  const handleChange = (type, value) => {
    if (type === 'version') setVersion(value);
    if (type === 'loader') setLoader(value);
    setSelectedVersions({});
    setSelectedResourcepackVersions({});
    updateUrlParams();
  };

  const handleModsChange = (e) => {
    setMods(e.target.value);
    updateUrlParams();
  };

  const handleResourcepackChange = (e) => {
    setResourcepacks(e.target.value);
    updateUrlParams();
  };

  const handleVersionSelect = (slug, version) => {
    const updatedVersions = { ...selectedVersions, [slug]: version };
    setSelectedVersions(updatedVersions);
    updateUrlParams();
  };

  const handleResourcepackVersionSelect = (slug, version) => {
    const updatedVersions = { ...selectedResourcepackVersions, [slug]: version };
    setSelectedResourcepackVersions(updatedVersions);
    updateUrlParams();
  };

  const handleRemove = (type, slug) => {
    const updateFn = type === 'mods' ? setMods : setResourcepacks;
    const versionsUpdateFn = type === 'mods' ? setSelectedVersions : setSelectedResourcepackVersions;
    const typeString = type === 'mods' ? mods : resourcepacks;
    
    const updatedType = typeString.split(',').filter(item => item.trim() !== slug).join(',');
    updateFn(updatedType);

    const { [slug]: _, ...updatedVersions } = type === 'mods' ? selectedVersions : selectedResourcepackVersions;
    versionsUpdateFn(updatedVersions);

    if (!updatedType.trim()) {
      setModDetails([]);
      setResourcepackDetails([]);
    }

    updateUrlParams();
  };

  return (
    <Container sx={{ height: '100vh', padding: '25px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Typography variant="h2">Modrinth Modpack Downloader</Typography>
        <Typography sx={{ textAlign: "center" }} variant='p'>
          This site allows you to easily create modpacks, update them to newer versions, and share them with anyone without using any programs.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', width: '60%' }}>
          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="version-label">Version</InputLabel>
            <Select labelId="version-label" id="version" value={version} label="Version" onChange={(e) => handleChange('version', e.target.value)}>
              {["1.21.1", "1.21", "1.20.4", "1.20.3", "1.20.2", "1.20.1", "1.20", "1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19", "1.18.2", "1.18.1", "1.18", "1.17.1", "1.17", "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16"].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="loader-label">Loader</InputLabel>
            <Select labelId="loader-label" id="loader" value={loader} label="Loader" onChange={(e) => handleChange('loader', e.target.value)}>
              {["fabric", "forge", "quilt", "neoforge"].map(l => <MenuItem key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
        <TextareaAutosize
          placeholder='Enter mods (comma separated)'
          value={mods}
          onChange={handleModsChange}
          style={{ width: '58%', padding: '10px', borderRadius: '4px', fontSize: '16px', backgroundColor: '#494949', color: '#fff' }}
        />
        <TextareaAutosize
          placeholder='Enter resourcepacks (comma separated)'
          value={resourcepacks}
          onChange={handleResourcepackChange}
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
        {modError && <Typography variant="body1" color="error">{modError}</Typography>}
        <Typography variant="h4" sx={{ marginTop: '30px' }}>Mods</Typography>
        <ModVersions
          modDetails={modDetails}
          selectedVersions={selectedVersions}
          handleVersionSelect={handleVersionSelect}
          handleRemoveMod={(slug) => handleRemove('mods', slug)}
        />
        <Typography variant="h4" sx={{ marginTop: '30px' }}>Resource Packs</Typography>
        <ModVersions
          modDetails={resourcepacksDetails}
          selectedVersions={selectedResourcepackVersions}
          handleVersionSelect={handleResourcepackVersionSelect}
          handleRemoveMod={(slug) => handleRemove('resourcepacks', slug)}
        />
      </Box>
    </Container>
  );
};

export default ModC;
