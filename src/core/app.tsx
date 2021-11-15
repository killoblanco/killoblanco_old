import React, { StrictMode } from 'react';
import LandingPage from '../landing';
import AppThemeProvider from '../styles/provider';

function App() {
  return (
    <StrictMode>
      <AppThemeProvider>
        <LandingPage />
      </AppThemeProvider>
    </StrictMode>
  );
}

export default App;
