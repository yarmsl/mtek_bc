import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as StoreProvider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import appStore, { persistor } from '~/store';

import App from './App';
import ErrorBoundary from './errorBoundary';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider store={appStore}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </PersistGate>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
