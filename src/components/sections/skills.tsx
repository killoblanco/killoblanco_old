import { styled, Typography } from '@mui/material'
import Grid2, { Grid2Props } from '@mui/material/Unstable_Grid2'
import { iconList, StackIcon } from '../stack-icon'
import { Card } from '../card'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Wrapper = styled(Grid2)<Grid2Props>(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: theme.spacing(10, 4)
}))

export const Skills = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Wrapper component="section" container spacing={0}>
      <Grid2 xs={12} md={6}>
        <Card>
          <Grid2 container spacing={4}>
            {iconList.map((icon) => (
              <Grid2 xs={4} sm={3} key={icon}>
                <StackIcon name={icon} />
              </Grid2>
            ))}
          </Grid2>
        </Card>
      </Grid2>
      <Grid2 xs={12} md={5} my={8}>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('Skills.Header')}
        </Typography>
        <Typography variant="subtitle1" component="p" mt={2}>
          {t('Skills.Card.Content')}
        </Typography>
      </Grid2>
    </Wrapper>
  )
}
