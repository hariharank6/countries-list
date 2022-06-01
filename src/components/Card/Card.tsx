import {
  Box,
  Stack,
  Skeleton,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Card as MuiCard
} from '@mui/material'
import InfoBlock from '../InfoBlock'
import CardProps from './types'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ loading = false, population, region, capital, commonName, name, flag, ...props }: CardProps) => {
  const navigate = useNavigate()

  const getCardInfo = useCallback(() => {
    return [
      {
        label: 'Population',
        value: population.toLocaleString('en-US')
      },
      {
        label: 'Region',
        value: region
      },
      {
        label: 'Capital',
        value: capital?.join(', ')
      }
    ]
  }, [capital, population, region])

  return (
    <MuiCard
      sx={{
        width: 280,
        height: 320,
        boxShadow: '2px 2px 10px 0 hsl(200deg 15% 8% / 11%)',
        backgroundColor: 'primary.main'
      }}
      onClick={() =>
        navigate(`/detail/${(commonName ?? name).toLocaleLowerCase()}`, { //passing available so that a network call is avoided
          state: {
            population,
            region,
            capital,
            commonName,
            name,
            flag,
            ...props
          }
        })
      }>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
        {loading ? (
          <Stack height="100%">
            <Skeleton
              variant="rectangular"
              width={280}
              height={155}
              sx={{
                borderRadius: '0.25rem',
                marginBottom: '1.5rem'
              }}
            />
            <Skeleton variant="text" height={50} sx={{ marginRight: '2rem' }} />
            <Skeleton variant="text" height={50} sx={{ marginRight: '6rem' }} />
          </Stack>
        ) : (
          <>
            <CardMedia component="img" height="155" image={flag} alt="Flag" />
            <CardContent
              sx={{
                flexGrow: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                padding: '1.5rem 1.25rem'
              }}>
              <Typography gutterBottom variant="h2" margin={0}>
                {commonName}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem'
                }}>
                {getCardInfo().map((info, index) => (
                  <InfoBlock label={info.label} value={info.value} key={index} />
                ))}
              </Box>
            </CardContent>
          </>
        )}
      </CardActionArea>
    </MuiCard>
  )
}

export default Card
