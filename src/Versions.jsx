import React from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, Button } from '@mui/material';

export const ModVersions = ({ modDetails, selectedVersions, handleVersionSelect, handleRemoveMod }) => {
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
    </Box>
  );
};
