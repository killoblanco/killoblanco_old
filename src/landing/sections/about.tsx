import { Container, Grid, Typography } from '@mui/material';
import Section from '../../components/section';

function About() {
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
              Acerca de Mi
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              Hola, soy Kamilo Vasquez, desarrollador de software desde mediados de 2010. Apasionado
              por crear soluciones de software que tengan un impacto en la vida de las personas.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              He trabajado con equipos de todo el mundo en grandes proyectos y con diferentes roles
              en el desarrollo web. Además, con algunas participaciones en otras áreas de desarrollo
              como aplicaciones móviles, aplicaciones de escritorio y WebAssembly. Autodidacta y
              entusiasta de la Inteligencia Artificial.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
