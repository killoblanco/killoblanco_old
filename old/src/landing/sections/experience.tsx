import { Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExperienceTimeline from '../../components/experience/timeline';
import Section from '../../components/section';

function Experience() {
  const { t } = useTranslation();

  return (
    <Section gradientDir="left" py={4}>
      <Container fixed>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {t('Experience.Header')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ExperienceTimeline />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Experience;
