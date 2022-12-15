import { Box, styled } from '@mui/material';
import { blueGrey, teal } from '@mui/material/colors';
import Noise from './noise.svg';

interface SectionProps {
  gradientDir?: 'left' | 'right' | 'top' | 'bottom';
  dark?: boolean;
}

const Section = styled(Box)<SectionProps>(({
  gradientDir = 'top',
  dark = false
}) => ({
  backgroundColor: dark ? blueGrey.A700 : teal.A700,
  backgroundImage: `
    linear-gradient(
      to ${gradientDir},
      ${dark ? blueGrey['900'] : teal['900']},
      transparent
    ),
    url(${Noise})
  `,
  filter: 'contrast(100%) brightness(100%)',
}));

export default Section;
