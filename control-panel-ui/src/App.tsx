import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';

import Router from '~/Router';
import ModalStack from '~/ui-kit/atoms/ModalStack';
import SnackStack from '~/ui-kit/atoms/SnackStack';
import { theme } from '~/ui-kit/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App(): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
        <SnackStack />
        <ModalStack />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
