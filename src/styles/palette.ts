import { ThemeOptions } from '@mui/material'

const schemes = {
  light: {
    primary: '#416917',
    primaryContainer: '#c0f18f',
    onPrimaryContainer: '#0e2000',
    secondary: '#57624a',
    secondaryContainer: '#dbe7c8',
    onSecondaryContainer: '#151e0b',
    error: '#ba1a1a',
    errorContainer: '#ffdad6',
    onErrorContainer: '#410002',
    tertiary: '#386664',
    tertiaryContainer: '#bbece9',
    onTertiaryContainer: '#00201f',
    outline: '#74796c',
    surface: '#fdfcf5',
    surfaceVariant: '#e0e4d5',
  },
  dark: {
    primary: '#a5d576',
    primaryContainer: '#2b5000',
    onPrimaryContainer: '#c0f18f',
    secondary: '#bfcbad',
    secondaryContainer: '#404a34',
    onSecondaryContainer: '#dbe7c8',
    error: '#ffb4ab',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',
    tertiary: '#a0cfcc',
    tertiaryContainer: '#1e4e4c',
    onTertiaryContainer: '#bbece9',
    outline: '#8e9285',
    surface: '#1b1c18',
    surfaceVariant: '#44483e',
  }
}

export const paletteColor = (mode: 'light' | 'dark'): Partial<ThemeOptions['palette']> => ({
  mode,
  common: {
    black: '#191d14',
    white: '#e0e4d5'
  },
  primary: {
    light: schemes[mode].primaryContainer,
    main: schemes[mode].primary,
    dark: schemes[mode].onPrimaryContainer
  },
  secondary: {
    light: schemes[mode].secondaryContainer,
    main: schemes[mode].secondary,
    dark: schemes[mode].onSecondaryContainer
  },
  error: {
    light: schemes[mode].errorContainer,
    main: schemes[mode].error,
    dark: schemes[mode].onErrorContainer
  },
  info: {
    light: schemes[mode].tertiaryContainer,
    main: schemes[mode].tertiary,
    dark: schemes[mode].onTertiaryContainer
  },
  divider: schemes[mode].outline,
  background: {
    default: schemes[mode].surface,
    paper: schemes[mode].surfaceVariant
  }
})
