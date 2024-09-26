import PropTypes from 'prop-types'; 
import { Box, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';

export const ItemVersions = ({ itemDetails, selectedVersions, handleVersionSelect, handleRemoveMod }) => {
  const sortedModDetails = [...itemDetails].sort((a, b) => a.slug.localeCompare(b.slug));

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {sortedModDetails.map((mod) => (
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
          <a href={`https://modrinth.com/${mod.type}/${mod.slug}`} target="_blank" rel="noopener noreferrer">
            <img
              src={mod.icon_url}
              alt={mod.slug}
              style={{ maxWidth: '120px', width: '6vw', borderRadius: '16px' }}
              onError={(e) => (e.target.style.backgroundColor = 'red')}
            />
          </a>
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

ItemVersions.propTypes = {
  itemDetails: PropTypes.array.isRequired,
  selectedVersions: PropTypes.object.isRequired,
  handleVersionSelect: PropTypes.func.isRequired,
  handleRemoveMod: PropTypes.func.isRequired,
};
