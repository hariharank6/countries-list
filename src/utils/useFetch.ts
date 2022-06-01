import useSWR from 'swr'
import { CountryData } from '../pages/Home/types'

interface UseFetchProps {
  url: string | null
}

export const useFetch = ({
  url
}: UseFetchProps): {
  data: Array<CountryData>
  isLoading: boolean
  error: string
} => {
  const { data, error } = useSWR(url, args =>
    fetch(args)
      .then(response => response.json())
      .then(jsonResponse =>
        jsonResponse.map(
          ({
            name,
            flags,
            population,
            region,
            capital,
            tld,
            currencies,
            subregion,
            languages,
            borders,
            cca3
          }: any) => ({
            name: name.official,
            commonName: name.common,
            flag: flags.svg,
            population: population,
            region: region,
            capital: capital,
            nativeName: Object.keys(name.nativeName ?? {}).map(key => name.nativeName[key]['common'])[0],
            topLevelDomain: tld,
            currencies:
              currencies &&
              Object.keys(currencies).map(currencyCode => ({
                code: currencyCode,
                name: currencies[currencyCode].name,
                symbol: currencies[currencyCode].symbol
              })),
            subregion: subregion,
            languages:
              languages &&
              Object.keys(languages).map(languageCode => ({
                code: languageCode,
                name: languages[languageCode]
              })),
            borders: borders,
            alpha3Code: cca3
          })
        )
      )
  )

  return {
    data,
    isLoading: url === null ? false : !error && !data,
    error: error
  }
}
