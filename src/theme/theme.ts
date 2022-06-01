import typography from './typography'
import breakpoints from './breakpoints'
import { useMemo, useState } from 'react'
import getComponentStyles from './components'
import { createTheme } from '@mui/material'
import { lightThemeColors, darkThemeColors } from './colors'

const useGlobalTheme = () => {
  const persistentMode = useMemo(() => localStorage.getItem('mode'), [])

  const [mode, setMode] = useState<'light' | 'dark'>(persistentMode === 'dark' ? persistentMode : 'light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem('mode', newMode)
          return newMode
        })
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints,
        palette: {
          mode,
          common: {
            white: 'hsl(0, 0%, 0%)',
            black: 'hsl(0, 0%, 0%)'
          },
          grey: {
            50: 'hsl(0, 0%, 52%)'
          },
          ...(mode === 'light' ? lightThemeColors : darkThemeColors)
        },
        typography,
        components: getComponentStyles(mode)
      }),
    [mode]
  )

  return {
    colorMode,
    theme
  }
}

export default useGlobalTheme
