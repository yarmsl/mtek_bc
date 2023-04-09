import React from 'react';

import { Box } from '@mui/material';

import RefInfoForm from './components/RefInfoForm';

const RefInfo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <RefInfoForm />
    </Box>
  );
};

export default React.memo(RefInfo);
