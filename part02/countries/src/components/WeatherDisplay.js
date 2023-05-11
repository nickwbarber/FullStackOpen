import { useEffect, useState } from "react"
import { getWeatherData } from "../services/api"
import { useCountryState } from "./CountryContext"

export const WeatherDisplay = () => {
  const country = useCountryState().selectedCountry
  const [ weather, setWeather ] = useState({})
  
  const isCountryLoaded = Object.keys(country).length !== 0
  
  useEffect(() => {
    const getWeather = async () =>{
      const [ lat, lon ] = country.capitalInfo.latlng
      const weatherData = await getWeatherData({ lat, lon })
      setWeather(weatherData)
    }
    isCountryLoaded && getWeather()
  }, [country.capitalInfo.latlng, isCountryLoaded])
  
  const isWeatherLoaded = Object.keys(weather).length !== 0

  if (!isWeatherLoaded) return <div></div>

  return (
    <div>
      <h2>Weather in {country.capital[0]}</h2>
      <h3>{weather.current.condition.text}</h3>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
      <p>temperature: {weather.current.temp_c}°C</p>
      <p>wind: {weather.current.wind_dir} @ {weather.current.wind_kph}kph</p>
    </div>
  )
}
