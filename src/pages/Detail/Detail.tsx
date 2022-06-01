import { useMemo } from 'react'
import InfoBlock from '../../components/InfoBlock'
import { useFetch } from '../../utils'
import { CountryData } from '../Home/types'
import HomeIcon from '@mui/icons-material/Home'
import ReportIcon from '@mui/icons-material/Report'
import { Box, Button, Typography } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const Detail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { country } = useParams()

  const { data: countryResponse, isLoading: isCountryLoading } = useFetch({
    url: !(location.state as CountryData)?.name ? `https://restcountries.com/v3.1/name/${country}?fullText=true` : null
  })

  const countryInfo = useMemo(
    () => (location.state as CountryData) || (countryResponse?.length ? countryResponse[0] : undefined),
    [countryResponse, location.state]
  )

  const { data: bordersResponse, isLoading: isBordersLoading } = useFetch({
    url: countryInfo?.borders?.length
      ? `https://restcountries.com/v3.1/alpha?codes=${countryInfo.borders.join(',')}`
      : null
  })

  const countryPrimaryInfo = useMemo(
    () => [
      {
        label: 'Native Name',
        value: countryInfo?.nativeName
      },
      {
        label: 'Population',
        value: countryInfo?.population && countryInfo?.population?.toLocaleString('en-US')
      },
      {
        label: 'Region',
        value: countryInfo?.region
      },
      {
        label: 'Sub Region',
        value: countryInfo?.subregion
      },
      {
        label: 'Capital',
        value: countryInfo?.capital?.join(', ')
      }
    ],
    [countryInfo]
  )

  const countrySecondaryInfo = useMemo(
    () => [
      {
        label: 'Top Level Domain',
        value: countryInfo?.topLevelDomain?.join(', ')
      },
      {
        label: 'Currencies',
        value: countryInfo?.currencies?.length
          ? countryInfo.currencies
              .map(currency => currency.name.toLocaleLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()))
              .join(', ')
          : undefined
      },
      {
        label: 'Languages',
        value: countryInfo?.languages?.length
          ? countryInfo.languages.map(language => language.name).join(', ')
          : undefined
      }
    ],
    [countryInfo]
  )

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default'
      }}>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: 1360,
          padding: { xs: '2rem 1.25rem 3rem', xl: '2rem 3rem 3rem' }
        }}>
        <Box
          sx={{
            gap: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'background.default'
          }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            startIcon={<KeyboardBackspaceIcon />}>
            Back
          </Button>
          {/* To easily navigate to home when the user clicks the border countries multiple times */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            startIcon={<HomeIcon />}
            sx={{ alignItems: 'stretch' }}>
            Home
          </Button>
        </Box>

        {isCountryLoading || countryInfo ? (
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', xl: 'row' },
                alignItems: { xs: 'flex-start', xl: 'center' },
                gap: { xs: '4rem', xl: '7rem' },
                margin: '3rem auto',
                flex: 1,
                maxWidth: {xs: '70%', xl: 'unset'}
              }}>
              {isCountryLoading ? (
                <Typography variant="h1">Loading ...</Typography>
              ) : (
                <>
                  <Box component="img" src={countryInfo.flag} width="100%" maxWidth={500} />

                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h1"> {countryInfo.commonName} </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', xl: 'row' },
                        gap: { xs: '3rem', xl: '6rem' },
                        marginTop: { xs: '2rem', xl: '2.5rem' }
                      }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                          flex: 1
                        }}>
                        {countryPrimaryInfo.map((info, index) => (
                          <InfoBlock label={info.label} value={info.value} key={index} />
                        ))}
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: '1rem',
                          flexShrink: 0,
                          flexDirection: 'column',
                          flex: 1
                        }}>
                        {countrySecondaryInfo.map((info, index) => (
                          <InfoBlock label={info.label} value={info.value} key={index} />
                        ))}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', xl: 'row' },
                        alignItems: { xs: 'flex-start', xl: 'center' },
                        justifyContent: 'flex-start',
                        gap: { xs: '1.5rem', xl: '1rem' },
                        marginTop: { xs: '3rem', xl: '5rem' },
                        minHeight: 36
                      }}>
                      <Typography variant="subtitle1" color="text.primary" flexShrink={0}>
                        Border Countries:
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          marginLeft: '0.25rem'
                        }}>
                        {isBordersLoading
                          ? 'Loading...'
                          : !bordersResponse?.length
                          ? 'None'
                          : bordersResponse?.map((country, index) => (
                              <Button
                                variant="contained"
                                color="primary"
                                key={index}
                                onClick={() => {
                                  navigate(`/detail/${country.commonName ?? country.name}`, { //passing available so that a network call is avoided
                                    state: {
                                      ...country
                                    }
                                  })
                                }}>
                                <Typography variant="body1" color="text.primary" textTransform="capitalize">
                                  {country.commonName}
                                </Typography>
                              </Button>
                            ))}
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              gap: '0.5rem',
              width: '100%',
              display: 'flex',
              marginTop: '3rem',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            <ReportIcon sx={{ width: '8rem', height: 'auto' }} />
            <Typography variant="h1">Something went wrong!</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Detail
