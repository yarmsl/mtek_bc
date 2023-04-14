import React from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { formatBytes } from '~/lib/formatBytes';
import { useAppDispatch } from '~/store';
import { closeModalAction } from '~/store/ModalStack';
import { showSnackBar } from '~/store/SnackStack';

import { useUploadFileMutation } from '../../files.service';

interface ICreateFileModalProps {
  kind: keyof IFilesKinds;
}

const CreateFileModal: React.FC<ICreateFileModalProps> = ({ kind }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { refreshAccessToken } = useRefreshToken();
  const [uploadFileMutation, { isLoading }] = useUploadFileMutation();
  const handleClose = React.useCallback(() => dispatch(closeModalAction()), [dispatch]);

  const handleUpload = React.useCallback(() => {
    if (inputRef?.current?.files?.length) {
      setFile(inputRef.current.files[0]);
    }
  }, []);

  const handleSave = React.useCallback(async () => {
    if (file) {
      try {
        await refreshAccessToken();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('kind', kind);
        await uploadFileMutation(formData).unwrap();
        dispatch(
          showSnackBar({
            severity: 'success',
            title: 'Успех!',
            message: 'Файл в домике',
            variant: 'outlined',
          }),
        );
        handleClose();
      } catch (e) {
        dispatch(
          showSnackBar({
            severity: 'error',
            title: 'Ошибка',
            message: 'Не удалось сохранить файл',
            variant: 'outlined',
          }),
        );
      }
    }
  }, [dispatch, file, handleClose, kind, refreshAccessToken, uploadFileMutation]);

  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2, width: 300, overflow: 'hidden' }}>
      <Typography variant='h6'>Загрузка файла</Typography>
      <Box sx={{ width: '100%', p: 1 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: 124,
                }}
              >
                {file?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип</TableCell>
              <TableCell>{file?.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Размер</TableCell>
              <TableCell>{formatBytes(file?.size || 0)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <input ref={inputRef} style={{ display: 'none' }} type='file' onChange={handleUpload} />
      {!file ? (
        <Button variant='contained' onClick={() => inputRef?.current?.click()}>
          Загрузить
        </Button>
      ) : (
        <Button
          color='info'
          endIcon={isLoading ? <CircularProgress size={16} /> : undefined}
          variant='contained'
          onClick={handleSave}
        >
          Сохранить
        </Button>
      )}
    </Paper>
  );
};

export default React.memo(CreateFileModal);
