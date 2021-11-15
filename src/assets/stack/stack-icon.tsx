import { Box, styled, Typography } from '@mui/material';
import iconDjango from './django-icon.svg';
import iconDocker from './docker-icon.svg';
import iconFirebase from './firebase.svg';
import iconFlutter from './flutter.svg';
import iconGatsby from './gatsby.svg';
import iconGCloud from './google-cloud.svg';
import iconGraphql from './graphql.svg';
import iconNext from './nextjs-icon.svg';
import iconNode from './nodejs-icon.svg';
import iconPython from './python.svg';
import iconReact from './react.svg';
import iconRSaga from './redux-saga.svg';
import iconRedux from './redux.svg';
import iconTypescript from './typescript-icon.svg';
import iconWA from './webassembly.svg';

interface StackIconProps {
  name: 'Django'
    | 'Docker'
    | 'Firebase'
    | 'Flutter'
    | 'Gatsby'
    | 'Google_Cloud'
    | 'GraphQL'
    | 'Next'
    | 'Node'
    | 'Python'
    | 'React'
    | 'Redux'
    | 'Redux_Saga'
    | 'TypeScript'
    | string;
}

const icons: { [k: string]: string } = {
  Django: iconDjango,
  Docker: iconDocker,
  Firebase: iconFirebase,
  Flutter: iconFlutter,
  Gatsby: iconGatsby,
  Google_Cloud: iconGCloud,
  GraphQL: iconGraphql,
  NextJS: iconNext,
  NodeJS: iconNode,
  Python: iconPython,
  React: iconReact,
  Redux: iconRedux,
  Redux_Saga: iconRSaga,
  TypeScript: iconTypescript,
  WebAssembly: iconWA
};

export const iconList = Object.keys(icons);

const Img = styled('img')(({ theme }) => ({
  height: theme.spacing(6),
  width: theme.spacing(6),
}));

function StackIcon({ name }: StackIconProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& :last-child': {
          marginTop: theme => theme.spacing(2),
        },
      }}
    >
      <Img src={icons[name]} alt={name} />
      <Typography variant="caption" align="center">
        {name.replace('_', ' ')}
      </Typography>
    </Box>
  );
}

export default StackIcon;
