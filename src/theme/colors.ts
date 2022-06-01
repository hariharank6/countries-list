import { PaletteOptions } from '@mui/material'

const lightThemeColors: PaletteOptions = {
  primary: {
    main: 'hsl(0, 0%, 100%)'
  },
  text: {
    primary: 'hsl(200, 15%, 8%)'
  },
  background: {
    default: 'hsl(0, 0%, 98%)'
  }
}

const darkThemeColors: PaletteOptions = {
  primary: {
    main: 'hsl(209, 23%, 22%)'
  },
  text: {
    primary: 'hsl(0, 0%, 100%)'
  },
  background: {
    default: 'hsl(207, 26%, 17%)'
  }
}

export { lightThemeColors, darkThemeColors }
