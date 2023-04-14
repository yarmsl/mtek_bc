import React from 'react';

import { Box } from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { useAppDispatch } from '~/store';
import { openModal } from '~/store/ModalStack';
import { showSnackBar } from '~/store/SnackStack';
import Table from '~/ui-kit/molecules/Table';

import CreateFileModal from './components/CreateFileModal';
import { filesColumnConfig, filesKinds } from './conf';
import { useDeleteFileMutation, useReadFilesInfoQuery } from './files.service';

const Files: React.FC = () => {
  const dispatch = useAppDispatch();
  const { refreshAccessToken } = useRefreshToken();
  const { data } = useReadFilesInfoQuery();
  const [deleteFile] = useDeleteFileMutation();

  const handleCreate = React.useCallback(
    (row: IFile) => {
      dispatch(openModal(<CreateFileModal kind={row.kind} />));
    },
    [dispatch],
  );

  const handleDelete = React.useCallback(
    async (row: IFile) => {
      try {
        await refreshAccessToken();
        await deleteFile({ kind: row.kind }).unwrap();
        dispatch(
          showSnackBar({
            severity: 'success',
            title: 'Успех!',
            message: 'Файл удален',
            variant: 'outlined',
          }),
        );
      } catch {
        dispatch(
          showSnackBar({
            severity: 'error',
            title: 'Ошибка',
            message: 'Не удалось удалить файл',
            variant: 'outlined',
          }),
        );
      }
    },
    [deleteFile, dispatch, refreshAccessToken],
  );

  const filesData: IFile[] = React.useMemo(
    () =>
      filesKinds.map((kind) => {
        const found = data?.find((file) => file.kind === kind);
        if (found) return found;
        return {
          kind,
          originalname: '',
          filename: '',
          path: '',
          size: 0,
          updatedAt: '',
          createdAt: '',
        };
      }),
    [data],
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Table
        config={filesColumnConfig}
        data={filesData}
        onCreate={handleCreate}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default React.memo(Files);
