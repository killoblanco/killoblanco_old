import { Typography } from '@mui/material';
import Section from '../../components/section';
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
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        👋🏻 Soy Kamilo Vasquez
      </Typography>
      <Thumbnail />
      <Typography variant="h3" align="center" sx={{ marginTop: 4 }}>
        Desarrollador 🦄
      </Typography>
    </Section>
  );
}

export default Jumbotron;
