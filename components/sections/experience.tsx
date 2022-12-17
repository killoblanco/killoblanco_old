import { styled, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'
import { List } from '../experience/list'

const Wrapper = styled(Grid2)(({ theme }) => ({
  alignItems: 'flex-star',
  justifyContent: 'space-evenly',
  padding: theme.spacing(10, 6),
  [theme.breakpoints.down('md')]: {
  padding: theme.spacing(10, 4)
  }
}))

export const Experience = () => {
  const { t } = useTranslation()
  return (
    <Wrapper component="section" container spacing={0}>
      <Grid2 xs={12} md="auto">
        <Typography variant="h2" component="h2" gutterBottom>
          {t('Experience.Header')}
        </Typography>
      </Grid2>
      <Grid2 xs={12} md>
        <List />
      </Grid2>
    </Wrapper>
  )
}
