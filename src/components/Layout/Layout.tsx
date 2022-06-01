import { FC } from 'react'
import { Box } from '@mui/material'
import Navbar from '../Navbar'
import LayoutProps from './types'

const Layout: FC<LayoutProps> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      maxWidth: '100vw',
      flexGrow: 1
    }}>
    <Navbar />
    {children}
  </Box>
)

export default Layout
