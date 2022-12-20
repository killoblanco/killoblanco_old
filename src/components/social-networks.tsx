import { IconButton, Stack } from '@mui/material'
import { Icon } from '@iconify/react'

export const SocialNetworks = () => (
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
  </Stack>
)
