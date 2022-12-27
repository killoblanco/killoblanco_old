import { Icon } from '@iconify/react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'
import i18n from '../locales'

export const LngMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const openMenu = ({ currentTarget }: SyntheticEvent<HTMLButtonElement>): void => {
    setAnchorEl(currentTarget)
  }

  const closeMenu = (): void => {
    setAnchorEl(null)
  }

  const setLng = (lng: string): void => {
    void i18n.changeLanguage(lng)
    closeMenu()
  }

  return (
    <>
      <IconButton onClick={openMenu}>
        <Icon icon="tabler:language" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!(anchorEl == null)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={() => setLng('es')}>Español</MenuItem>
        <MenuItem onClick={() => setLng('en')}>English</MenuItem>
      </Menu>
    </>
  )
}
