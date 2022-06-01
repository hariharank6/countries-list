import { OutlinedInput, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import InputProps from './types'

const Input = ({ handleChange, placeholder, ...props }: InputProps) => {
  const theme = useTheme()

  return (
    <OutlinedInput
      placeholder={placeholder ?? 'Please provide input'}
      onChange={e => setTimeout(() => handleChange(e), 400)}
      fullWidth
      startAdornment={
        <SearchIcon
          sx={{
            color: theme.palette.mode === 'dark' ? 'text.primary' : 'grey.50',
            marginRight: '1.5rem'
          }}
        />
      }
      sx={{
        backgroundColor: 'primary.main',
        maxWidth: 450,
        paddingLeft: 4,
        color: theme.palette.mode === 'dark' ? 'text.primary' : 'grey.50',
        fontFamily: 'NunitoSansMedium',
        fontSize: '16px',
        lineHeight: '16px',
        fontWeight: 600
      }}
      {...props}
    />
  )
}

export default Input
