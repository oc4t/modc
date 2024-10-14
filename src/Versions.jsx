/* eslint-disable react/prop-types */
import { Box, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';

export const ItemVersions = ({itemDetails = [], selectedVersions = {}, handleVersionSelect = () => {}, handleRemoveMod: handleRemoveItem = () => {}}) => {
  const sortedItemDetails = [...itemDetails].sort((a, b) => a.slug.localeCompare(b.slug));
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {sortedItemDetails.map((item) => (
        <Box
          key={item.slug}
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
            {item.slug}
          </Typography>
          <a href={`https://modrinth.com/${item.type}/${item.slug}`} target="_blank" rel="noopener noreferrer">
            <img
              src={item.icon_url}
              alt={item.slug}
              style={{ maxWidth: '120px', width: '6vw', borderRadius: '16px' }}
              onError={(e) => (e.target.style.backgroundColor = 'red')}
            />
          </a>
          <InputLabel id={`mod-version-label-${item.slug}`}>Version</InputLabel>
          <Select
            labelId={`mod-version-label-${item.slug}`}
            id={`mod-version-${item.slug}`}
            value={selectedVersions[item.slug] || ""}
            onChange={(e) => handleVersionSelect(item.slug, e.target.value)}
            sx={{ maxWidth: '100%', height: 30, width: 120 }}
          >
            {item.versions.map((ver) => (
              <MenuItem key={ver.id} value={ver.id}>
                {ver.version_number}
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 1, height: 27, width: 70 }}
            onClick={() => handleRemoveItem(item.slug)}
          >
            Remove
          </Button>
        </Box>
      ))}
    </Box>
  );
};