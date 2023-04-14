import React from 'react';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Box, Button } from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { useAppDispatch } from '~/store';
import { openModal } from '~/store/ModalStack';
import { showSnackBar } from '~/store/SnackStack';
import Table from '~/ui-kit/molecules/Table';

import { useDeleteArticleMutation, useReadArticlesQuery } from './articles.service';
import CreateArticleModal from './components/CreateArticleModal';
import EditArticleModal from './components/EditArticleModal';
import { articlesColumnConfig } from './conf';

const Articles: React.FC = () => {
  const dispatch = useAppDispatch();
  const { refreshAccessToken } = useRefreshToken();
  const { data } = useReadArticlesQuery();
  const [deleteArticle] = useDeleteArticleMutation();

  const handleCreateArticle = React.useCallback(
    () => dispatch(openModal(<CreateArticleModal />)),
    [dispatch],
  );

  const handleEditArticle = React.useCallback(
    (row: IArticle) => dispatch(openModal(<EditArticleModal id={row.id} />)),
    [dispatch],
  );

  const handleDelete = React.useCallback(
    async (row: IArticle) => {
      try {
        await refreshAccessToken();
        await deleteArticle(row.id).unwrap();
        dispatch(
          showSnackBar({
            severity: 'success',
            message: 'Статья удалена',
            title: 'Успех!',
          }),
        );
      } catch (e) {
        dispatch(
          showSnackBar({
            severity: 'error',
            message: 'Не удалось удалить статью',
            title: 'Упс',
          }),
        );
      }
    },
    [deleteArticle, dispatch, refreshAccessToken],
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Button
        size='large'
        startIcon={<AddCircleOutlineRoundedIcon />}
        variant='contained'
        onClick={handleCreateArticle}
      >
        Создать статью
      </Button>
      <Table
        config={articlesColumnConfig}
        data={data || []}
        onDelete={handleDelete}
        onEdit={handleEditArticle}
      />
    </Box>
  );
};

export default React.memo(Articles);
