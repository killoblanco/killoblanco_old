import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import LngMenu from './lng-menu'

function TopBar() {

  return (
    <AppBar position="fixed" elevation={false}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack component="nav" direction="row" spacing={2}>
          <LngMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
