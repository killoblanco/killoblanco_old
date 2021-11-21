import React, { StrictMode } from 'react';
import { initialize as initGA } from 'react-ga';
import { I18nextProvider } from 'react-i18next';
import LandingPage from '../landing';
import i18n from '../locales';
import AppThemeProvider from '../styles/provider';

initGA(
  process.env.REACT_APP_GA!,
  { testMode: process.env.NODE_ENV === 'development' },
);

function App() {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider>
          <LandingPage />
        </AppThemeProvider>
      </I18nextProvider>
    </StrictMode>
  );
}

export default App;
