import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Router from '~/Router';
import { useAppSelector } from '~/store';
import { darkModeSelector } from '~/store/UI';
import ModalStack from '~/ui-kit/atoms/ModalStack';
import SnackStack from '~/ui-kit/atoms/SnackStack';
import { theme } from '~/ui-kit/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App(): JSX.Element {
  const darkMode = useAppSelector(darkModeSelector);
  const currentTheme = useMemo(() => createTheme(theme(darkMode)), [darkMode]);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <SnackStack />
        <ModalStack />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
