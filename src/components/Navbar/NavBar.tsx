import { Box, Toolbar, useTheme, Container, Typography } from '@mui/material'
import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import { ColorModeContext } from '../../App'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

const NavBar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'primary.main',
        boxShadow: theme.shadows[1]
      }}>
      <Container
        sx={{
          maxWidth: 1360,
          padding: { xs: '2rem 1.25rem', xl: '2rem 3rem' }
        }}>
        <Toolbar
          disableGutters
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Typography variant="h2" noWrap component="div">
            Where in the world?
          </Typography>
          <Box
            onClick={colorMode.toggleColorMode}
            component="button"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 0,
              background: 'none',
              cursor: 'pointer'
            }}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon sx={{ color: 'white' }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ color: 'black' }} />
            )}
            <Typography variant="subtitle1" sx={{ color: 'text.primary', textTransform: 'none' }}>
              {theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
