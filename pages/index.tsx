import { Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Jumbotron } from '../components/sections/jumbotron'
import { About } from '../components/sections/about'
import { Skills } from '../components/sections/skills'
import { Experience } from '../components/sections/experience'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}

export default function Home() {
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <Jumbotron />
      <About />
      <Skills />
      <Experience />
    </Container>
  )
}
