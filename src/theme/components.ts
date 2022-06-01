import { Components, Theme } from '@mui/material'

const getComponentStyles = (mode: 'light' | 'dark'): Components<Theme> => ({
  MuiSelect: {
    styleOverrides: {
      nativeInput: {
        color: 'inherit',
        fontFamily: 'NunitoSansMedium',
        fontSize: '1rem',
        lineHeight: '1rem',
        fontWeight: 600
      },
      iconOutlined: {
        color: 'inherit'
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'inherit !important',
        fontFamily: 'NunitoSansMedium',
        fontSize: '1rem',
        fontWeight: 600
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: mode === 'dark' ? '0px 0px 8px 2px #1b2631' : '0px 0px 8px 1px rgb(193 159 159 / 33%)',
        padding: '6px 20px',
        '&:hover': {
          background: mode === 'dark' ? 'hsl(209, 14%, 22%)' : 'hsl(0deg, 0%, 94%)'
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: 'none',
        boxShadow: '0px 0px 10px 2px hsl(200deg 15% 8% / 8%)'
      }
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 'unset !important'
      }
    }
  }
})

export default getComponentStyles
