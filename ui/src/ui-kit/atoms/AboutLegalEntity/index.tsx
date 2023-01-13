import React from 'react';

import { Box, Typography } from '@mui/material';

const creds = {
  legalEntity: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «М-ТЭК»',
  address: 'Челябинская обл., г. Челябинск, ул. Тарасова, д. 38 офис 7',
  inn: '7451417625',
  ogrn: '1177456003361',
  kpp: '745101001',
  okato: '75 401 376 000 (Челябинская область, Челябинск, Советский)',
  okpo: '06365978',
  oktmo:
    'Челябинская область, Городские округа Челябинской области, Челябинский, Внутригородские районы городского округа Челябинский, Советский',
};

const AboutLegalEntity: React.FC = () => {
  const { legalEntity, address, inn, ogrn, kpp, okato, okpo, oktmo } = creds;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '554px',
      }}
    >
      <Typography variant='body2'>{legalEntity}</Typography>
      <Typography variant='body2'>{`Адрес: ${address}`}</Typography>
      <Typography variant='body2'>{`ИНН: ${inn} ОГРН: ${ogrn} КПП: ${kpp}`}</Typography>
      <Typography variant='body2'>{`ОКАТО: ${okato}`}</Typography>
      <Typography variant='body2'>{`ОКПО: ${okpo}`}</Typography>
      <Typography variant='body2'>{`ОКТМО: ${oktmo}`}</Typography>
    </Box>
  );
};

export default React.memo(AboutLegalEntity);
