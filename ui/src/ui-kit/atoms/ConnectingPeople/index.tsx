import React from 'react';

import { Box, Button, Link } from '@mui/material';

const creds = {
  phone: '+7 (963) 080-07-66',
  mail: 'm-tek74@yandex.ru',
};

const ConnectingPeople: React.FC = () => {
  const { phone, mail } = creds;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button href={`tel:${phone}`} size='large' sx={{ mb: '10px' }} variant='contained'>
        {phone}
      </Button>
      <Link color='common.black' href={`mailto:${mail}`}>
        {mail}
      </Link>
    </Box>
  );
};

export default React.memo(ConnectingPeople);
