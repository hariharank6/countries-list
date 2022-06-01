import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import ReportIcon from '@mui/icons-material/Report'
import SearchOffIcon from '@mui/icons-material/SearchOff'

import { useFetch } from '../../utils'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { COUNTRY_DATA_TEMPLATE, FILTER_BY_REGION } from './constants'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filter, setFilter] = useState<string>('all')
  const {
    data: countriesData,
    isLoading,
    error
  } = useFetch({
    url: 'https://restcountries.com/v3.1/all'
  })

  const filteredCountries = useMemo(() => {
    if (countriesData) {
      return countriesData.filter(
        country =>
          (filter === 'all' || country.region === filter) &&
          country.name.trim().toLocaleLowerCase().includes(searchQuery.trim().toLocaleLowerCase())
      )
    }

    return []
  }, [countriesData, filter, searchQuery])

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          gap: '2rem',
          padding: { xs: '2rem 1.25rem 3rem', xl: '2rem 3rem 3rem' },
          maxWidth: 1360
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row',
            width: '100%',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
          <Input placeholder="Search for a country..." handleChange={e => setSearchQuery(e.target.value)} />
          <Select
            options={FILTER_BY_REGION}
            value={filter}
            label="Filter by Region"
            handleChange={e => setFilter(e.target.value as string)}
            style={{
              minWidth: 250
            }}
          />
        </Box>

        {isLoading || filteredCountries.length ? (
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, 280px)',
              gap: '3rem',
              justifyContent: 'center'
            }}>
            {/* To switch between loading skeleton and actual card */}
            {(isLoading ? Array.from(Array(20)) : filteredCountries).map((country, index) => (
              <Card key={index} loading={isLoading} {...(isLoading ? COUNTRY_DATA_TEMPLATE : country)} />
            ))}
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
            {error ? (
              <ReportIcon sx={{ width: '8rem', height: 'auto' }} />
            ) : (
              <SearchOffIcon sx={{ width: '8rem', height: 'auto' }} />
            )}
            <Typography variant="h1">{error ? 'Something went wrong' : 'No results found!'}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
