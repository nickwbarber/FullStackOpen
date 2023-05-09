import { useEffect, useState } from 'react'
import { QueryForm } from './components/QueryForm'
import { CountryList } from './components/CountryList'
import { CountryInfoDisplay } from './components/CountryInfoDisplay'
import { getCountries } from './services/api'
import { fuzzyFilterCountriesByName } from './util'
import { render, renderHook } from '@testing-library/react'


const App = () => {
  const [ query, setQuery ] = useState('')
  const [ countries, setCountries ] = useState(null)
  const [ matchedCountries, setMatchedCountries ] = useState(null)
  const [ hasUserSearched, setHasUserSearched ] = useState(false)
  const [ countryToDisplay, setCountryToDisplay ] = useState({})

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
    })
  }, [])

  useEffect(() => {
    setMatchedCountries(countries?
      fuzzyFilterCountriesByName(countries, query)
    : countries)
  }, [countries, query])

  useEffect(() => {
    setCountryToDisplay(matchedCountries?
      matchedCountries.length === 1?
        matchedCountries[0]
      : {}
    : {})
  }, [matchedCountries])

  return (
    <div>
      <QueryForm
        querySetter={setQuery}
        setHasUserSearched={setHasUserSearched}
      />
      <CountryList
        countries={matchedCountries}
        hasUserSearched={hasUserSearched}
      />
      <CountryInfoDisplay
        country={countryToDisplay}
      />
    </div>
  )
}

export default App
