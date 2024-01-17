// ShopNowButton.tsx

import React from 'react';
import Button from '@mui/material/Button';

const ShopNowButton = () => {
  return (
    <Button variant="contained" color="primary" sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      Shop Now
    </Button>
  );
}

export default ShopNowButton;
