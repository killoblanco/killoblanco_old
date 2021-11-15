import { Container, Grid, Typography } from '@mui/material';
import ExperienceTimeline from '../../components/experience/timeline';
import Section from '../../components/section';

function Experience() {
  return (
    <Section gradientDir="left" py={4}>
      <Container fixed>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Experiencia
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
