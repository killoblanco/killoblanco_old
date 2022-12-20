import { PropsWithChildren, useEffect } from 'react'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { theme } from './theme'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const darkModeAtom = atom({
  key: 'darkModeAtom',
  default: false
})

export const useDarkModeToggle = (): () => void => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

  return () => {
    setDarkMode(!darkMode)
  }
}
export const StylesProvider = ({children}: PropsWithChildren) => {
  const darkMode = useRecoilValue(darkModeAtom)
  const setDarkMode = useSetRecoilState(darkModeAtom)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setDarkMode(prefersDarkMode)
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}