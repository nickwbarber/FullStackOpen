// external imports
import { useEffect, useState } from 'react'

// helper functions
import { getCountries, getWeatherData } from './services/api'
import { fuzzyFilterCountriesByName } from './util'

// components
import { QueryForm } from './components/QueryForm'
import { CountryInfoDisplay } from './components/CountryInfoDisplay'
import { CountryList } from './components/CountryList'


const App = () => {
  const [ query, setQuery ] = useState('')
  const [ countries, setCountries ] = useState(null)
  const [ matchedCountries, setMatchedCountries ] = useState(null)
  const [ hasUserSearched, setHasUserSearched ] = useState(false)
  const [ countryToDisplay, setCountryToDisplay ] = useState(null)
  const [ weatherData, setWeatherData ] = useState(null)

  // fetch country data
  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
    })
  }, [])
  
  // fetch weather data
  useEffect(() => {
    if (!countryToDisplay) return
    (async () => {
      const res = await getWeatherData({
        lat: countryToDisplay.capitalInfo.latlng[0],
        lon: countryToDisplay.capitalInfo.latlng[1],
        appid: process.env.REACT_APP_WEATHER_API_KEY
      })
      setWeatherData(res.data)
    })()
  } , [countryToDisplay])

  // results from country search
  useEffect(() => {
    if (!countries) return
    setMatchedCountries(
      fuzzyFilterCountriesByName(countries, query)
    )
  }, [countries, query])

  // set country to display once the search completes
  useEffect(() => {
    if (!matchedCountries) return
    setCountryToDisplay(
      matchedCountries.length === 1?
        matchedCountries[0]
      : null
    )
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
        weather={weatherData}
      />
    </div>
  )
}

export default App
