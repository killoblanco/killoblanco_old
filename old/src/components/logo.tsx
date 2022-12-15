import { styled } from '@mui/material';
import me from '../assets/me.png';

const Img = styled('img')(({ theme }) => ({
  width: theme.spacing(4),
  aspectRatio: '1 / 1',
}));

function Logo() {
  return <Img src={me} alt="Me as Avatar :D" />;
}

export default Logo;
