import { Box, styled } from '@mui/material'
import starMask from '../assets/star.svg'
import { useTranslation } from 'react-i18next'

const Img = styled('img')(({ theme }) => ({
  width: `clamp(${theme.spacing(32)}, 50vw, ${theme.spacing(64)})`,
  aspectRatio: '1 / 1',
  maskImage: `url(${starMask})`,
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  maskPosition: 'center'
}))

export const Thumbnail = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={(t) => ({
        filter: `
          drop-shadow(8px 8px 0 ${t.palette.primary.light})
          drop-shadow(-8px -8px 0 ${t.palette.primary.light})
        `,
        width: 'min-content',
        margin: '0 auto'
      })}
    >
      <Img
        src="https://avatars.githubusercontent.com/u/4205975"
        alt={t('Jumbotron.ImgAlt') || ''}
      />
    </Box>
  )
}
