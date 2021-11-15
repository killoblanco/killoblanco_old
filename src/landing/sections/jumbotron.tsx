import { Typography } from '@mui/material';
import Section from '../../components/section';
import SocialNetworks from '../../components/social-networks';
import Thumbnail from '../../components/thumbnail';

function Jumbotron() {
  return (
    <Section
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" mb={4}>
        👋🏻 Soy Kamilo Vasquez
      </Typography>
      <Thumbnail />
      <Typography variant="h3" align="center" mt={4}>
        Desarrollador 🦄
      </Typography>
      <SocialNetworks />
    </Section>
  );
}

export default Jumbotron;
