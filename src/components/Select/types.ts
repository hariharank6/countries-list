import { SelectChangeEvent, SelectProps as MuiSelectProps } from '@mui/material'
import { CSSProperties } from 'react'

interface SelectProps extends MuiSelectProps {
  label?: string
  value: string | number
  options: {
    label: string
    value: string | number
  }[]
  handleChange: (e: SelectChangeEvent<unknown>) => void
  style?: CSSProperties
}

export default SelectProps
