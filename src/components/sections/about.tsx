import Grid2 from '@mui/material/Unstable_Grid2'
import { styled, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Wrapper = styled(Grid2)(({theme}) => ({
  backgroundColor: theme.palette.info.light,
  alignItems: 'flex-end',
  justifyContent: 'space-evenly',
  padding: theme.spacing(10, 4),
  color: theme.palette.getContrastText(theme.palette.info.light),
  outline: `solid ${theme.spacing(0.75)} ${theme.palette.divider}`,
  borderRadius: '10px',
  boxShadow: `${theme.spacing(2)} ${theme.spacing(2)} 0 0 ${theme.palette.primary.dark}`,
  [theme.breakpoints.down('xl')]: {
    borderRadius: 0,
    boxShadow: `${theme.spacing(1.75)} ${theme.spacing(1.75)} 0 0 ${theme.palette.primary.dark}`,
  }
}))

export const About = () => {
  const { t } = useTranslation()
  return (
    <Wrapper component="section" container spacing={0}>
      <Grid2 xs={12} md={3} mb={8}>
        <Typography variant="h1" component="h2">
          {t('About.Header')}
        </Typography>
      </Grid2>
      <Grid2 xs={12} md={6}>
        <Typography gutterBottom variant="subtitle1" component="p">
          {t('About.Line1')}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p">
          {t('About.Line2')}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p">
          {t('About.Line3')}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p">
          {t('About.Line4')}
        </Typography>
      </Grid2>
    </Wrapper>
  )
}
