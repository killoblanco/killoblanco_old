import { Box } from '@mui/material';
import Footer from '../components/footer';
import TopBar from '../components/top-bar';
import About from './sections/about';
import Experience from './sections/experience';
import Jumbotron from './sections/jumbotron';
import Skills from './sections/skills';

function LandingPage() {
  return (
    <Box>
      <TopBar />
      <Jumbotron />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </Box>
  );
}

export default LandingPage;
