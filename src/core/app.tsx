import React, { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import LandingPage from '../landing';
import i18n from '../locales';
import AppThemeProvider from '../styles/provider';

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
