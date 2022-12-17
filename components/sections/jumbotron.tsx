import Grid2 from '@mui/material/Unstable_Grid2'
import { Thumbnail } from '../thumbnail'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SocialNetworks } from '../social-networks'

export const Jumbotron = () => {
  const { t } = useTranslation()
  return (
    <Grid2
      container
      spacing={0}
      alignItems="center"
      justifyContent="space-evenly"
      height="100vh"
      sx={{ px: 4, py: 8 }}
    >
      <Grid2 xs={12} md="auto" order={2}>
        <Thumbnail />
      </Grid2>
      <Grid2 xs={12} md={5.5} order={1}>
        <Typography variant="h3">
          {t('Jumbotron.Line1')}
        </Typography>
        <Typography variant="h1">
          {t('Jumbotron.Line2')}
        </Typography>
        <Typography variant="h2">
          {t('Jumbotron.Line3')}
        </Typography>
        <SocialNetworks />
      </Grid2>
    </Grid2>
  )
}
