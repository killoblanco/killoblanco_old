import { Box, styled } from '@mui/material'

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.getContrastText(theme.palette.secondary.light),
  borderRadius: '10px',
  border: `solid ${theme.spacing(0.75)} ${theme.palette.divider}`,
  boxShadow: `${theme.spacing(1)} ${theme.spacing(1)} 0 0 ${theme.palette.info.dark}`,
  padding: theme.spacing(6, 2),
}))
