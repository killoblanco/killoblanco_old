import { Container } from '@mui/material'
import { About } from '../components/sections/about'
import { Experience } from '../components/sections/experience'
import { Jumbotron } from '../components/sections/jumbotron'
import { Skills } from '../components/sections/skills'

export const LandingPage = () => (
  <Container component="main" maxWidth="xl" disableGutters>
    <Jumbotron />
    <About />
    <Skills />
    <Experience />
  </Container>
)
