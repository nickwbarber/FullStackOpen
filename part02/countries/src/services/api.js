import axios from 'axios'

const COUNTRY_DATA_URL = "https://restcountries.com/v3.1/all"
const WEATHER_DATA_URL = "http://api.weatherapi.com/v1/current.json"
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getCountries = () =>
  axios.get(COUNTRY_DATA_URL).then(res => res.data)

export const getWeatherData = ({ lat, lon }) =>
  axios.get(`${WEATHER_DATA_URL}`, {
    params: {
      q: `${lat},${lon}`,
      key: WEATHER_API_KEY,
    }
  })
