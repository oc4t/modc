import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, Button } from '@mui/material';

export const ModVersions = ({ mods, resourcepacks, version, loader, updateUrlParams }) => {
  const [modDetails, setModDetails] = useState([]);
  const [resourcepacksDetails, setResourcepackDetails] = useState([]);
  const [selectedVersions, setSelectedVersions] = useState({});
  const [selectedResourcepackVersions, setSelectedResourcepackVersions] = useState({});
  const [error, setError] = useState(null);
  
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

  const fetchDetails = async (type, apiUrl, setDetails, setSelectedVersions) => {
    if (!type) return;
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
        const versionResponse = await fetch(apiUrl(item.slug));
        if (!versionResponse.ok) continue;
        const versionData = await versionResponse.json();

        if (versionData.length === 0) {
          setError((prevError) => `${prevError ? prevError + ', ' : ''} ${item.slug} doesn't have a version for ${version}`);
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
      }

      setDetails(updatedDetails);
      setSelectedVersions(updatedVersions);
    } catch (error) {
      setError(`Error fetching details for ${type}: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchDetails(mods, slug => `https://api.modrinth.com/v2/project/${slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`, setModDetails, setSelectedVersions);
    fetchDetails(resourcepacks, slug => `https://api.modrinth.com/v2/project/${slug}/version`, setResourcepackDetails, setSelectedResourcepackVersions);
  }, [mods, version, loader, resourcepacks]);

  useEffect(() => {
    const encodedMods = encodeMods(mods, selectedVersions);
    const encodedResourcepacks = encodeMods(resourcepacks, selectedResourcepackVersions);
    updateUrlParams(encodedMods, encodedResourcepacks);
  }, [selectedVersions, selectedResourcepackVersions]);

  const handleVersionSelect = (slug, version) => {
    const updatedVersions = { ...selectedVersions, [slug]: version };
    setSelectedVersions(updatedVersions);
  };

  const handleRemoveMod = (slug) => {
    const updatedMods = mods.split(',').filter(mod => mod !== slug).join(',');
    setSelectedVersions(prev => {
      const { [slug]: _, ...rest } = prev;
      return rest;
    });
    updateUrlParams(updatedMods, resourcepacks);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {modDetails.map((mod) => (
        <Box
          key={mod.slug}
          sx={{
            backgroundColor: '#333433',
            borderRadius: '8px',
            padding: '8px 10px',
            boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '6.6vw',
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', fontSize: '14px' }}>
            {mod.slug}
          </Typography>
          <img
            src={mod.icon_url}
            alt={mod.slug}
            style={{ maxWidth: '120px', width: '6vw', borderRadius: '16px' }}
            onError={(e) => e.target.style.display = 'none'}
          />
          <InputLabel id={`mod-version-label-${mod.slug}`}>Version</InputLabel>
          <Select
            labelId={`mod-version-label-${mod.slug}`}
            id={`mod-version-${mod.slug}`}
            value={selectedVersions[mod.slug] || ""}
            onChange={(e) => handleVersionSelect(mod.slug, e.target.value)}
            sx={{ maxWidth: '100%', height: 30, width: 120 }}
          >
            {mod.versions.map((ver) => (
              <MenuItem key={ver.id} value={ver.id}>
                {ver.version_number}
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 1, height: 27, width: 70 }}
            onClick={() => handleRemoveMod(mod.slug)}
          >
            Remove
          </Button>
        </Box>
      ))}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
