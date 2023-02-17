import { FC } from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox='0 0 26 20' {...props}>
    <path
      d='M0.303131 10.8595C1.30429 10.0029 2.20918 9.22245 3.21034 8.34684C5.00087 10.041 6.94542 11.8493 8.96699 13.7528C13.4914 9.16534 17.9774 4.65407 22.4441 0.12376C23.3297 1.03744 24.1769 1.89401 25.1203 2.84576C19.8064 8.2136 14.4348 13.6385 9.00549 19.1016C6.13679 16.3986 3.3066 13.6957 0.303131 10.8595Z'
      fill='#28766A'
    />
  </SvgIcon>
);

export default CheckIcon;
