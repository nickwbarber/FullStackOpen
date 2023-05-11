import axios from 'axios'

const COUNTRY_DATA_URL = "https://restcountries.com/v3.1/all"
const WEATHER_DATA_URL = "http://api.weatherapi.com/v1/current.json"
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getCountries = async () => {
  const res = await axios.get(COUNTRY_DATA_URL)
  return res.data
}

export const getWeatherData = async ({ lat, lon }) => {
  const res = await axios.get(
    `${WEATHER_DATA_URL}`,
    { params: {
      q: `${lat},${lon}`,
      key: WEATHER_API_KEY,
    }
  })
  return res.data
}
