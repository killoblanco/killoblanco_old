import { keyframes, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

const bounce = keyframes({
  'from': { transform: 'translateY(-12px)' },
  'to': { transform: 'translateY(12px)' },
});

const animation = `
  ${bounce}
  1.6s
  ease-in-out
  infinite
  alternate
`;

const Img = styled('img')(({ theme }) => ({
  width: theme.spacing(32),
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  boxShadow: theme.shadows[12],
  animation,
}));

function Thumbnail() {
  const { t } = useTranslation();
  return (
    <Img
      src="https://avatars.githubusercontent.com/u/4205975"
      alt={t('Jumbotron.ImgAlt')}
    />
  );
}

export default Thumbnail;
