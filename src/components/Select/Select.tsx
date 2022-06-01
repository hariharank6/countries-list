import { Box, FormControl, InputLabel, MenuItem, Select as MuiSelect, Typography } from '@mui/material'
import SelectProps from './types'

const Select = ({ label, value, options, handleChange, style, ...props }: SelectProps) => (
  <Box sx={{ ...style }}>
    <FormControl fullWidth>
      <InputLabel
        id="filter-by-region"
        sx={{
          color: 'text.primary'
        }}>
        {label ?? 'Select'}
      </InputLabel>
      <MuiSelect
        id="filter-by-region"
        label="Filter by Region"
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: 'primary.main'
        }}
        {...props}>
        {options.map((option, index) => (
          <MenuItem value={option.value} key={index}>
            <Typography variant="subtitle1" lineHeight="22px">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  </Box>
)

export default Select
