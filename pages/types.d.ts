import { AppProps } from 'next/app'
import createEmotionCache from '../styles/emotion-cache'

export interface CustomAppProps extends AppProps {
  emotionCache?: ReturnType<typeof createEmotionCache>
}

export interface CustomDocumentProps {
  emotionStyleTags?: JSX.Element[]
}
