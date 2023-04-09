import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button, CircularProgress } from '@mui/material';

import { useRefreshToken } from '~/hooks/useRefreshToken';
import { useAppDispatch } from '~/store';
import { showSnackBar } from '~/store/SnackStack';
import EmailTextField from '~/ui-kit/atoms/EmailTextField';
import LabeledCheckBox from '~/ui-kit/atoms/LabeledCheckBox';
import TextField from '~/ui-kit/atoms/TextField';

import { root } from './styles';
import { useReadRefInfoQuery, useUpdateRefInfoMutation } from '../../refInfo.service';

const RefInfoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { refreshAccessToken } = useRefreshToken();

  const [updateRefInfo, { isLoading: isUpdating }] = useUpdateRefInfoMutation();
  const { data: refInfo } = useReadRefInfoQuery();

  const handleSave = React.useCallback(
    async (dto: Partial<IRefInfo>) => {
      try {
        await refreshAccessToken();
        await updateRefInfo(dto).unwrap();
        dispatch(
          showSnackBar({ severity: 'success', title: 'Успех!', message: 'Данные сохранены' }),
        );
      } catch (e) {
        dispatch(
          showSnackBar({
            title: 'Ошибка',
            message: e instanceof Error ? e.message : 'Не удалось отправить данные',
            severity: 'error',
            variant: 'outlined',
          }),
        );
      }
    },
    [dispatch, refreshAccessToken, updateRefInfo],
  );

  const methods = useForm<Partial<IRefInfo>>({
    defaultValues: {
      phoneNumber: '',
      manager_phoneNumber: '',
      mail: '',
      personalArea_externalLink: '',
      personalArea_isShow: true,
      organization_name: '',
      organization_inn: '',
      organization_kpp: '',
      address_area: '',
      address_city: '',
      address_street: '',
      address_house: '',
      address_office: '',
    },
  });
  const { handleSubmit, reset } = methods;

  React.useEffect(() => {
    reset(refInfo);
  }, [refInfo, reset]);

  return (
    <FormProvider {...methods}>
      <Box component='form' sx={root} onSubmit={handleSubmit(handleSave)}>
        <TextField
          label='Номер телефона основной'
          name='phoneNumber'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <EmailTextField label='Почта' name='mail' size='small' sx={{ height: '64px' }} fullWidth />

        <TextField
          label='Номер телефона менеджера'
          name='manager_phoneNumber'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <TextField
          label='Ссылка на личный кабинет'
          name='personalArea_externalLink'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <LabeledCheckBox label='Показывать кнопку Личный кабинет' name='personalArea_isShow' />

        <TextField
          label='Название организации'
          name='organization_name'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <TextField
          label='ИНН'
          name='organization_inn'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <TextField
          label='КПП'
          name='organization_kpp'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <TextField
          label='Адрес. Область'
          name='address_area'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />
        <TextField
          label='Адрес. Город'
          name='address_city'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />
        <TextField
          label='Адрес. Улица'
          name='address_street'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />
        <TextField
          label='Адрес. Дом'
          name='address_house'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />
        <TextField
          label='Адрес. Офис'
          name='address_office'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
        />

        <Button
          color='info'
          endIcon={isUpdating ? <CircularProgress size={18} /> : undefined}
          type='submit'
          variant='contained'
          fullWidth
          onClick={handleSubmit(handleSave)}
        >
          Сохранить
        </Button>
      </Box>
    </FormProvider>
  );
};

export default React.memo(RefInfoForm);
