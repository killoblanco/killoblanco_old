import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import { LngMenu } from './lng-menu'
import { ThemeToggle } from './theme-toggle'

export const TopBar = () => (
  <AppBar position="fixed" elevation={0}>
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <Stack component="nav" direction="row" spacing={1}>
        <ThemeToggle />
        <LngMenu />
      </Stack>
    </Toolbar>
  </AppBar>
)
