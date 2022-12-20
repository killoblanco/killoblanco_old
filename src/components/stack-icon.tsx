import { Box, styled, Typography } from '@mui/material'
import iconDjango from '../assets/stack/django-icon.svg'
import iconDocker from '../assets/stack/docker-icon.svg'
import iconFirebase from '../assets/stack/firebase.svg'
import iconFlutter from '../assets/stack/flutter.svg'
import iconGatsby from '../assets/stack/gatsby.svg'
import iconGCloud from '../assets/stack/google-cloud.svg'
import iconGraphql from '../assets/stack/graphql.svg'
import iconMaterialUI from '../assets/stack/material-ui.svg'
import iconNext from '../assets/stack/nextjs-icon.svg'
import iconNode from '../assets/stack/nodejs-icon.svg'
import iconPython from '../assets/stack/python.svg'
import iconReact from '../assets/stack/react.svg'
import iconRecoil from '../assets/stack/recoil-icon.svg'
import iconRSaga from '../assets/stack/redux-saga.svg'
import iconRedux from '../assets/stack/redux.svg'
import iconTypescript from '../assets/stack/typescript-icon.svg'
import iconESLint from '../assets/stack/eslint.svg'
import iconVitejs from '../assets/stack/vitejs.svg'
import iconVitest from '../assets/stack/vitest.svg'
import iconPlaywright from '../assets/stack/playwright.svg'

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
    | 'ESLint'
    | 'Vitejs'
    | 'Vitest'
    | 'Playwright'
    | string;
}

const icons: { [k: string]: string } = {
  Django: iconDjango,
  Docker: iconDocker,
  ESLint: iconESLint,
  Firebase: iconFirebase,
  Flutter: iconFlutter,
  Gatsby: iconGatsby,
  Google_Cloud: iconGCloud,
  GraphQL: iconGraphql,
  Material_UI: iconMaterialUI,
  NextJS: iconNext,
  NodeJS: iconNode,
  Playwright: iconPlaywright,
  Python: iconPython,
  React: iconReact,
  Recoil: iconRecoil,
  Redux: iconRedux,
  Redux_Saga: iconRSaga,
  TypeScript: iconTypescript,
  ViteJS: iconVitejs,
  Vitest: iconVitest
}

export const iconList = Object.keys(icons)

const Img = styled('img')(({ theme }) => ({
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
