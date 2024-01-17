import React from 'react';
import Box from '@mui/material/Box';

const BannerImage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px', // Adjust the height as needed
        backgroundImage: 'url(src/assets/Plantbanner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* You can add additional content (e.g., Shop Now button, text) within this Box */}
    </Box>
  );
}

export default BannerImage;
