import Grid2 from '@mui/material/Unstable_Grid2'
import { Thumbnail } from '../thumbnail'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SocialNetworks } from '../social-networks'
import waveImg from '../../public/assets/wave.svg'
import Image from 'next/image'

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
      <Grid2 xs={12} md={5.5}>
        <Typography variant="h3">
          <Box component={Image} src={waveImg} alt="wave" sx={{transform: 'scale(1.5)'}} />
          &nbsp;&nbsp;
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
      <Grid2 xs={12} md="auto">
        <Thumbnail />
      </Grid2>
    </Grid2>
  )
}
