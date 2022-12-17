import { Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Jumbotron } from '../components/sections/jumbotron'
import { About } from '../components/sections/about'
import { Skills } from '../components/sections/skills'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}

export default function Home() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Jumbotron />
      <About />
      <Skills />
    </Container>
  )
}
