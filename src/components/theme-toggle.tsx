import { Icon } from '@iconify/react'
import { IconButton } from '@mui/material'
import { useDarkModeToggle } from '../styles/provider'

export const ThemeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkModeToggle()

  return (
    <IconButton onClick={toggleDarkMode}>
      <Icon icon={`tabler:bulb${!darkMode ? '-off' : ''}`} />
    </IconButton>
  )
}
