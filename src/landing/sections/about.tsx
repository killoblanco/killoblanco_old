import { Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/section';

function About() {
  const { t } = useTranslation();

  return (
    <Section
      id="about"
      gradientDir="right"
      py={4}
    >
      <Container>
        <Grid container spacing={4} direction="column">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" align="center">
              {t('About.Header')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              {t('About.Line1')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              {t('About.Line2')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
