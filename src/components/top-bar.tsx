import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import LngMenu from './lng-menu';
import Logo from './logo';

function TopBar() {
  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack component="nav" direction="row" spacing={2}>
          <IconButton size="small" onClick={goToTop}>
            <Logo />
          </IconButton>
          <LngMenu />
          {/*<Button variant="contained" disableElevation size="small">*/}
          {/*  Demos*/}
          {/*</Button>*/}
          {/*<Button variant="contained" disableElevation size="small">*/}
          {/*  Blog*/}
          {/*</Button>*/}
          {/*<Button variant="contained" disableElevation size="small">*/}
          {/*  ¿Eres Reclutador?*/}
          {/*</Button>*/}
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
