import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button, Paper, Typography } from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { SERVER_URL } from '~/lib/constants';
import { file2optiDataurl, file2optiFile } from '~/lib/imageOptimaze';
import { useAppDispatch } from '~/store';
import { closeModalAction } from '~/store/ModalStack';
import { showSnackBar } from '~/store/SnackStack';
import TextField from '~/ui-kit/atoms/TextField';

import { useReadArticlesQuery, useUpdateArticleMutation } from '../../articles.service';

interface IEditArticleModalProps {
  id: number;
}

const EditArticleModal: React.FC<IEditArticleModalProps> = ({ id }) => {
  const { data } = useReadArticlesQuery();
  const article = React.useMemo(() => data?.find((article) => article.id === id), [data, id]);
  const dispatch = useAppDispatch();
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState(`${SERVER_URL}/${article?.src}`);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClose = React.useCallback(() => dispatch(closeModalAction()), [dispatch]);

  const { refreshAccessToken } = useRefreshToken();

  const [editArticle] = useUpdateArticleMutation();

  const methods = useForm<IArticleDto>({
    defaultValues: { title: article?.title || '', text: article?.text || '' },
  });
  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = methods;

  const handleUpload = React.useCallback(async () => {
    try {
      if (inputRef?.current?.files?.length) {
        const res = await file2optiFile(inputRef.current.files[0], 1024, 1, 'webp');
        setFile(res);
        const prRes = await file2optiDataurl(inputRef.current.files[0], 500, 1, 'webp');
        setPreview(prRes);
      }
    } catch (e) {
      dispatch(
        showSnackBar({
          severity: 'error',
          message: 'Не удалось загрузить изображение',
          title: 'Упс',
        }),
      );
    }
  }, [dispatch]);

  const handleSave = React.useCallback(
    async (data: IArticleDto) => {
      try {
        const formData = new FormData();
        if (!file && !isDirty) return handleClose();
        if (file) formData.append('src', file);
        if (isDirty) {
          formData.append('title', data.title);
          formData.append('text', data.text);
        }

        await refreshAccessToken();
        await editArticle({ data: formData, id }).unwrap();

        dispatch(
          showSnackBar({
            severity: 'success',
            title: 'Успех!',
            message: 'Статья сохранена',
            variant: 'outlined',
          }),
        );
        handleClose();
      } catch (e) {
        dispatch(
          showSnackBar({
            severity: 'error',
            message: 'Не удалось изменить статью',
            title: 'Упс',
          }),
        );
      }
    },
    [dispatch, editArticle, file, handleClose, id, isDirty, refreshAccessToken],
  );

  React.useEffect(() => {
    if (article) reset({ title: article.title, text: article.text });
  }, [article, reset]);

  return (
    <FormProvider {...methods}>
      <Paper
        component='form'
        sx={{
          width: 500,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
          '&>*:not(:last-child)': { mb: 2 },
        }}
        onSubmit={handleSubmit(handleSave)}
      >
        <Typography variant='h6'>Редактировать статью</Typography>
        {preview ? (
          <Box
            sx={{
              width: '100%',
              '&>img': {
                width: '100%',
                objectFit: 'contain',
              },
            }}
          >
            <img alt='Предпросмотр' src={preview} />
          </Box>
        ) : null}
        <input
          ref={inputRef}
          accept='image/*'
          style={{ display: 'none' }}
          type='file'
          onChange={handleUpload}
        />

        <Button onClick={() => inputRef?.current?.click()}>Загрузить изображение</Button>

        <TextField label='Заголовок' name='title' variant='standard' />
        <TextField label='Статья' maxRows={6} minRows={6} name='text' variant='filled' multiline />
        <Button color='info' type='submit' variant='contained' onClick={handleSubmit(handleSave)}>
          Сохранить
        </Button>
      </Paper>
    </FormProvider>
  );
};

export default React.memo(EditArticleModal);
