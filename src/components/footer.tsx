import { Container, Grid, Link, styled, Typography } from '@mui/material';
import Section from './section';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecorationStyle: 'dotted',
  textDecorationColor: 'inherit',
  textUnderlineOffset: theme.spacing(0.75),
  '&:hover': {
    textDecorationStyle: 'dashed',
  }
}));

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
              Hecho con ❤️ & ☕ por&nbsp;
              <StyledLink
                href="https://www.linkedin.com/in/killoblanco/"
                target="_about"
              >
                Kamilo Vasquez
              </StyledLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Footer;
