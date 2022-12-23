import { Container } from '@mui/material'
import React from 'react'
import { About } from '../components/sections/about'
import { Experience } from '../components/sections/experience'
import { Footer } from '../components/sections/footer'
import { Jumbotron } from '../components/sections/jumbotron'
import { Skills } from '../components/sections/skills'

export const LandingPage = (): JSX.Element => (
  <Container component="main" maxWidth="xl" disableGutters>
    <Jumbotron />
    <About />
    <Skills />
    <Experience />
    <Footer />
  </Container>
)
