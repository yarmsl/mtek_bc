import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface mediaQueries {
  isMobile: boolean;
  isTablet: boolean;
  isPortable: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isMoreThan2k: boolean;
  isDownThan1366: boolean;
}

export const useMedia = (): mediaQueries => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPortable = useMediaQuery(theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMoreThan2k = useMediaQuery(theme.breakpoints.up('xl'));
  const isDownThan1366 = useMediaQuery('(max-width:1366px)');

  return {
    isMobile,
    isTablet,
    isPortable,
    isLaptop,
    isDesktop,
    isMoreThan2k,
    isDownThan1366,
  };
};
