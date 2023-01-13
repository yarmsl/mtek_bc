import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '~/store';
import { darkModeSelector } from '~/store/UI';

interface IHelmetProps {
  title: string;
}

const Meta = ({ title }: IHelmetProps): JSX.Element => {
  const darkMode = useAppSelector(darkModeSelector);

  return (
    <Helmet>
      <title>{title}</title>
      <meta content={title} name='title' />

      <meta content={darkMode ? '#252850' : '#f0f4f9'} name='theme-color' />
    </Helmet>
  );
};

export default memo(Meta);
