import { Language } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import i18n from '../locales';

function LngMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const setLng = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <Language />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={() => setLng('es')}>Español</MenuItem>
        <MenuItem onClick={() => setLng('en')}>English</MenuItem>
      </Menu>
    </>
  );
}

export default LngMenu;
