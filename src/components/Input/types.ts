import { ChangeEvent } from 'react'
import { OutlinedInputProps } from '@mui/material'

interface InputProps extends OutlinedInputProps {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  placeholder?: string
}

export default InputProps
