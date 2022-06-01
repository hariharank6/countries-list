import { InfoBlockProps } from './types'
import { Box, Typography } from '@mui/material'

const InfoBlock = ({ label, value }: InfoBlockProps) => (
  <>
    {value ? (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '0.25rem'
        }}>
        <Typography variant="subtitle1" color="text.primary" flexShrink={0} textTransform="capitalize">
          {label}:
        </Typography>
        {typeof value === 'string' ? (
          <Typography variant="body1" color="text.primary">
            {value}
          </Typography>
        ) : (
          value
        )}
      </Box>
    ) : null}
  </>
)

export default InfoBlock
