import { Container, Grid, Typography } from '@mui/material';
import Section from './section';

function Footer() {
  return (
    <Section
      gradientDir="bottom"
      dark
      py={6}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body2">
              Hecho con ❤️ & ☕ por mí
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Footer;
