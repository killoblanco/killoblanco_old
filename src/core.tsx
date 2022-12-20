import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import './styles/globals.css'
import { LandingPage } from './pages/landing'
import i18n from './locales'
import { I18nextProvider } from 'react-i18next'
import { StylesProvider } from './styles/provider'

export const Core = () => {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <RecoilRoot>
          <StylesProvider>
            <LandingPage />
          </StylesProvider>
        </RecoilRoot>
      </I18nextProvider>
    </StrictMode>
  )
}