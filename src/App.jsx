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
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(-1);
  const [error, setError] = useState(null);

  // Encodes mods/resourcepacks for URL
  const encodeMods = (mods, selectedVersions) => {
    return mods.split(',').map(mod => mod.trim()).map(modSlug => {
      return selectedVersions[modSlug] ? `${encodeURIComponent(modSlug)}:${encodeURIComponent(selectedVersions[modSlug])}` : encodeURIComponent(modSlug);
    }).join(',');
  };

  // Updates the URL with selected mods and resource packs
  const updateUrlParams = (encodedMods, encodedResourcepacks) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('version', version);
    searchParams.set('loader', loader);

    if (encodedMods && encodedMods.trim()) searchParams.set('mods', encodedMods);
    else searchParams.delete('mods');

    if (encodedResourcepacks && encodedResourcepacks.trim()) searchParams.set('resourcepacks', encodedResourcepacks);
    else searchParams.delete('resourcepacks');

    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
  };

  // Updates URL when mods/resourcepacks or their selected versions change
  useEffect(() => {
    const encodedMods = encodeMods(mods, {});
    const encodedResourcepacks = encodeMods(resourcepacks, {});
    updateUrlParams(encodedMods, encodedResourcepacks);
  }, [mods, resourcepacks]); // Trigger update when mods or resourcepacks change

  const handleChange = (type, value) => {
    if (type === 'version') setVersion(value);
    if (type === 'loader') setLoader(value);
  };

  const handleModsChange = (e) => {
    setMods(e.target.value);
  };

  const handleResourcepackChange = (e) => {
    setResourcepacks(e.target.value);
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
          onClick={() => downloadMods(mods, setDownloading, setProgress, setError)}
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
        <Typography variant="h4" sx={{ marginTop: '30px' }}>Mods</Typography>
        <ModVersions
          mods={mods}
          resourcepacks={resourcepacks}
          version={version}
          loader={loader}
          updateUrlParams={updateUrlParams}
        />
      </Box>
    </Container>
  );
};

export default ModC;
