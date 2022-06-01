export interface CountryData {
  name: string
  commonName: string
  flag: string
  population: number
  region: string
  capital: string[]
  nativeName: string
  topLevelDomain: Array<string>
  currencies: Array<{
    code: string
    name: string
    symbol: string
  }>
  subregion: string
  languages: Array<{
    code: string
    name: string
  }>
  borders: Array<string>
  alpha3Code: string
}
