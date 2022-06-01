import useGlobalTheme from './theme'
import { createContext } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import './index.css'
import Router from './routes'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

const App = () => {
  const { theme, colorMode } = useGlobalTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
