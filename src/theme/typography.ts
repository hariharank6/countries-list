import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: ['NunitoSansBold', 'NunitoSansLight', 'NunitoSansMedium'].join(','),
  fontWeightLight: 300,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  h1: {
    fontFamily: 'NunitoSansBold',
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 800
  },
  h2: {
    fontFamily: 'NunitoSansBold',
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 800
  },
  subtitle1: {
    fontFamily: 'NunitoSansMedium',
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 600
  },
  body1: {
    fontFamily: 'NunitoSansLight',
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 300
  },
  caption: {
    fontFamily: 'NunitoSansLight',
    fontSize: '11px',
    lineHeight: '11px',
    fontWeight: 300,
    letterSpacing: '-0.3px'
  }
}

export default typography
