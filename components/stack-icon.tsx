import { Box, styled, Typography } from '@mui/material'
import iconDjango from '../public/assets/stack/django-icon.svg'
import iconDocker from '../public/assets/stack/docker-icon.svg'
import iconFirebase from '../public/assets/stack/firebase.svg'
import iconFlutter from '../public/assets/stack/flutter.svg'
import iconGatsby from '../public/assets/stack/gatsby.svg'
import iconGCloud from '../public/assets/stack/google-cloud.svg'
import iconGraphql from '../public/assets/stack/graphql.svg'
import iconMaterialUI from '../public/assets/stack/material-ui.svg'
import iconNext from '../public/assets/stack/nextjs-icon.svg'
import iconNode from '../public/assets/stack/nodejs-icon.svg'
import iconPython from '../public/assets/stack/python.svg'
import iconReact from '../public/assets/stack/react.svg'
import iconRecoil from '../public/assets/stack/recoil-icon.svg'
import iconRSaga from '../public/assets/stack/redux-saga.svg'
import iconRedux from '../public/assets/stack/redux.svg'
import iconTypescript from '../public/assets/stack/typescript-icon.svg'
import Image from 'next/image'

interface StackIconProps {
  name: 'Django'
    | 'Docker'
    | 'Firebase'
    | 'Flutter'
    | 'Gatsby'
    | 'Google_Cloud'
    | 'GraphQL'
    | 'Material_UI'
    | 'Next'
    | 'Node'
    | 'Python'
    | 'React'
    | 'Recoil'
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
  Material_UI: iconMaterialUI,
  NextJS: iconNext,
  NodeJS: iconNode,
  Python: iconPython,
  React: iconReact,
  Recoil: iconRecoil,
  Redux: iconRedux,
  Redux_Saga: iconRSaga,
  TypeScript: iconTypescript
}

export const iconList = Object.keys(icons)

const Img = styled(Image)(({ theme }) => ({
  height: theme.spacing(6),
  width: theme.spacing(6)
}))

export function StackIcon({ name }: StackIconProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& :last-child': {
          marginTop: theme => theme.spacing(2)
        }
      }}
    >
      <Img src={icons[name]} alt={name} />
      <Typography variant="caption" align="center">
        {name.replace('_', ' ')}
      </Typography>
    </Box>
  )
}
