import { Box, Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Thumbnail } from '../components/thumbnail'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}

export default function Home() {
  const { t } = useTranslation()
  return (
    <Container maxWidth={false} disableGutters>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
      >
        <Thumbnail />
        <Box>
          <Typography variant="h3">
            {t('Jumbotron.Line1')}
          </Typography>
          <Typography variant="h1" gutterBottom>
            {t('Jumbotron.Line2')}
          </Typography>
          <Typography variant="h2">
            {t('Jumbotron.Line3')}
          </Typography>
        </Box>
      </Stack>
    </Container>
  )
}
