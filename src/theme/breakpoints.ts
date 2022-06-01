import { BreakpointsOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    sm: false
    md: false
    lg: false
    xl: true
  }
}

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    xl: 1440
  }
}

export default breakpoints
