import { Box, Tooltip, Typography } from '@mui/material';

import { SERVER_URL } from '~/lib/constants';
import { formatDate } from '~/lib/formatDate';

export const articlesColumnConfig: IColumnConfig<IArticle>[] = [
  {
    id: 'src',
    title: 'Изображение',
    render: (value, rowData) => (
      <Box
        sx={{
          height: 75,
          overflow: 'hidden',
          objectFit: 'cover',
          '&>img': { height: '100%', objectFit: 'contain' },
        }}
      >
        <img alt={rowData.title} src={`${SERVER_URL}/${value}`} />
      </Box>
    ),
  },
  {
    id: 'title',
    title: 'Заголовок',
  },
  {
    id: 'text',
    title: 'Статья',
    render: (value) => (
      <Tooltip title={value}>
        <Typography
          sx={{ maxWidth: 350, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {value}
        </Typography>
      </Tooltip>
    ),
  },
  {
    id: 'createdAt',
    title: 'Создан',
    render: (value) => formatDate(`${value}`),
  },
  {
    id: 'updatedAt',
    title: 'Обновлен',
    render: (value) => formatDate(`${value}`),
  },
];
