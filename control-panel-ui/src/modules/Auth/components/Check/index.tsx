import React from 'react';

import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import Loading from '~/ui-kit/atoms/Loading';

import { checkAuthThunk } from '../../store';

const Check: React.FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = useRouter();

  const handleCheckAuth = React.useCallback(async () => {
    try {
      await dispatch(checkAuthThunk()).unwrap();
    } catch {
      goTo('signin');
    }
  }, [dispatch, goTo]);

  React.useEffect(() => {
    handleCheckAuth();
  }, [handleCheckAuth]);

  return <Loading fullscreen />;
};

export default React.memo(Check);
