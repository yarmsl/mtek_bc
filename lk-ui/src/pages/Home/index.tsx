import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { useMedia } from '~/hooks/useMedia';
import ConnectingPeople from '~/ui-kit/atoms/ConnectingPeople';
import BoxIcon from '~/ui-kit/icons/BoxIcon';
import CheckIcon from '~/ui-kit/icons/CheckIcon';
import HexIcon from '~/ui-kit/icons/HexIcon';
import LorryIcon from '~/ui-kit/icons/LorryIcon';

const creds = [
  {
    Icon: BoxIcon,
    title: 'Грузовладельцу',
    subtitle:
      'Cтраховка, быстрый поиск партнера для доставки груза, ЭДО, связь со службой поддержки 24/7',
  },
  {
    Icon: LorryIcon,
    title: 'Собственникам автотранспорта',
    subtitle:
      'Поиск груза, страхование и документооборот, квалифицированная помощь на всех этапах, удобный личный кабинет',
  },
  {
    Icon: HexIcon,
    title: 'Запчасти',
    subtitle: 'Металлические ящики, паллеты, крепежи, молдинги, ЭДО',
  },
];

const abouts = [
  'Компания «М-ТЭК» работает с 2017 года',
  'Над вашим грузом будет работать команда экспертов отрасли: личный менеджер 24/7, бухгалтерия, инженеры, логисты, it, операторы службы поддержки 24/7',
  'Мы работаем со всем, что необходимо для организации грузоперевозок как для перевозчика, так и для грузоотправителя: от поиска груза до печати в акте выполненных работ. Направление, связанное с грузоперевозчиками «М-тэк», управляет собственным парком транспортных средств, а также производит системы для хранения и перевозки грузов. Именно поэтому мы можем гарантировать безопасность грузов.',
  'Если вы занимаетесь грузоперевозками и работаете на себя, мы поможем существенно увеличить доход и снизить затраты на коммуникацию с клиентом.',
];

const Home: FC = () => {
  const { isPortable } = useMedia();
  return (
    <>
      <Box
        sx={{
          py: '25px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            width: { sx: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            '&>*:not(:last-child)': { mb: '50px' },
          }}
        >
          {creds.map(({ Icon, title, subtitle }) => (
            <Box key={title} sx={{ display: 'flex' }}>
              <Box sx={{ fontSize: { xs: '50px', md: '100px' }, mr: { xs: '20px', md: '40px' } }}>
                <Icon fontSize='inherit' />
              </Box>
              <Box>
                <Typography
                  color='primary.dark'
                  sx={{
                    fontSize: { xs: '18px', md: '36px' },
                    fontWeight: 700,
                    lineHeight: '100%',
                    mb: '6px',
                  }}
                >
                  {title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '16px', md: '18px' } }}>{subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {isPortable && (
          <Box sx={{ my: '30px' }}>
            <ConnectingPeople />
          </Box>
        )}
        <Box
          sx={{
            width: { sx: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            '&>*:not(:last-child)': { mb: '32px' },
          }}
        >
          {abouts.map((about, i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <CheckIcon sx={{ mr: '18px' }} />
              <Typography sx={{ fontSize: { xs: '16px', md: '20px' } }}>{about}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Home;
