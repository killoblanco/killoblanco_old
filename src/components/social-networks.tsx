import { IconButton, Stack } from '@mui/material'
import { Icon } from '@iconify/react'
import React from 'react'

export const SocialNetworks = (): JSX.Element => (
  <Stack direction="row" spacing={8} mt={4}>
    <IconButton
      component="a"
      href="https://github.com/killoblanco"
      target="_about"
      size="large"
      color="secondary"
    >
      <Icon icon="tabler:brand-github" width={56} height={56} />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.linkedin.com/in/killoblanco/"
      target="_about"
      size="large"
      color="secondary"
    >
      <Icon icon="tabler:brand-linkedin" width={56} height={56} />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.paypal.com/donate/?hosted_button_id=XPHPMQWVW2SWA"
      target="_donate"
      size="large"
      color="secondary"
    >
      <Icon icon="tabler:brand-paypal" width={56} height={56} />
    </IconButton>
  </Stack>
)
