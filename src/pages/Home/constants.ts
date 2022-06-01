import { CountryData } from "./types"

export const FILTER_BY_REGION = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Africa',
    value: 'Africa'
  },
  {
    label: 'America',
    value: 'Americas'
  },
  {
    label: 'Asia',
    value: 'Asia'
  },
  {
    label: 'Europe',
    value: 'Europe'
  },
  {
    label: 'Oceania',
    value: 'Oceania'
  }
]

export const COUNTRY_DATA_TEMPLATE: CountryData = {
  name: '',
  commonName: '-',
  flag: '',
  population: 0,
  region: '',
  capital: [],
  nativeName: '',
  topLevelDomain: [],
  currencies: [],
  subregion: '',
  languages: [],
  borders: [],
  alpha3Code: ''
}
