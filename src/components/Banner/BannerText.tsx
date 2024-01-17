// BannerText.tsx

import React from 'react';
import Typography from '@mui/material/Typography';

interface BannerTextProps {
  text: string;
}

const BannerText: React.FC<BannerTextProps> = ({ text }) => {
  return (
    <Typography variant="h3" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      {text}
    </Typography>
  );
}

export default BannerText;
