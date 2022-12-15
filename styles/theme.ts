import { Readex_Pro } from '@next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material'

export const readexPro = Readex_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif']
})

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: readexPro.style.fontFamily
    }
  })
)
