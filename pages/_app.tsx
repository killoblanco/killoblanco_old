import '../styles/globals.css'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/emotion-cache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'
import { CustomAppProps } from './types'

const clientSideEmotionCache = createEmotionCache()

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: CustomAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Kamilo Vasquez | Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}