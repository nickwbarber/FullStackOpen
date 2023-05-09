import axios from 'axios'

const dataUrl = "https://restcountries.com/v3.1/all"

export const getCountries = () => {
  return axios.get(dataUrl).then(res => res.data)
}
