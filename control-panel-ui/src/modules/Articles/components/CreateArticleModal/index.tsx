import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button, Paper, Typography } from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { file2optiDataurl, file2optiFile } from '~/lib/imageOptimaze';
import { useAppDispatch } from '~/store';
import { closeModalAction } from '~/store/ModalStack';
import { showSnackBar } from '~/store/SnackStack';
import TextField from '~/ui-kit/atoms/TextField';

import { useCreateArticleMutation } from '../../articles.service';

const CreateArticleModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [file, setFile] = React.useState<File | null>(null);
  const [fileErr, setFileErr] = React.useState(false);
  const [preview, setPreview] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClose = React.useCallback(() => dispatch(closeModalAction()), [dispatch]);

  const { refreshAccessToken } = useRefreshToken();

  const [createArticle] = useCreateArticleMutation();

  const methods = useForm<IArticleDto>({ defaultValues: { title: '', text: '' } });
  const { handleSubmit } = methods;

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
        if (!file) {
          dispatch(
            showSnackBar({
              severity: 'warning',
              message: 'Загрузите изображение',
              title: 'Предупреждение',
            }),
          );
          return setFileErr(true);
        } else setFileErr(false);

        const formData = new FormData();
        formData.append('src', file);
        formData.append('title', data.title);
        formData.append('text', data.text);

        await refreshAccessToken();
        await createArticle(formData).unwrap();

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
            message: 'Не удалось создать статью',
            title: 'Упс',
          }),
        );
      }
    },
    [createArticle, dispatch, file, handleClose, refreshAccessToken],
  );

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
        <Typography variant='h6'>Создать статью</Typography>
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

        <Button
          color={fileErr ? 'error' : undefined}
          variant={fileErr ? 'outlined' : undefined}
          onClick={() => inputRef?.current?.click()}
        >
          Загрузить изображение
        </Button>

        <TextField label='Заголовок' name='title' variant='standard' required />
        <TextField
          label='Статья'
          maxLength={2000}
          maxRows={6}
          minRows={6}
          name='text'
          variant='filled'
          multiline
          required
        />
        <Button color='info' type='submit' variant='contained' onClick={handleSubmit(handleSave)}>
          Сохранить
        </Button>
      </Paper>
    </FormProvider>
  );
};

export default React.memo(CreateArticleModal);
