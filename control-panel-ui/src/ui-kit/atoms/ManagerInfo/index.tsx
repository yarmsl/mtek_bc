import React from 'react';

import { Box, Link, Typography } from '@mui/material';

const creds = {
  name: 'Артемчук А.В.',
  position: 'Менеджер отдела продаж',
  phone: '+7 (963) 080-07-66',
  mail: 'm-tek74@yandex.ru',
};

const ManagerInfo: React.FC = () => {
  const { name, position, phone, mail } = creds;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '21px', color: 'common.black' }}>
        {name}
      </Typography>
      <Typography color='primary.dark' sx={{ fontWeight: 700, fontSize: '21px' }}>
        {position}
      </Typography>
      <Link
        href={`tel:${phone}`}
        sx={{
          textDecoration: 'none',
          color: 'common.black',
          fontSize: '21px',
        }}
      >
        {phone}
      </Link>
      <Link
        href={`mailto:${mail}`}
        sx={{
          color: 'common.black',
          textDecorationColor: '#000',
          fontSize: '21px',
        }}
      >
        {mail}
      </Link>
    </Box>
  );
};

export default React.memo(ManagerInfo);
