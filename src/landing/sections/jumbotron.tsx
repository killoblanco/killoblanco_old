import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/section';
import SocialNetworks from '../../components/social-networks';
import Thumbnail from '../../components/thumbnail';

function Jumbotron() {
  const { t } = useTranslation();

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
        {t('Jumbotron.Line1')}
      </Typography>
      <Thumbnail />
      <Typography variant="h3" align="center" mt={4}>
        {t('Jumbotron.Line2')}
      </Typography>
      <SocialNetworks />
    </Section>
  );
}

export default Jumbotron;
