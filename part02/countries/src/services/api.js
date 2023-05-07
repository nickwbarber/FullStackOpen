import axios from 'axios'

const dataUrl = "https://restcountries.com/v3.1/all"

export const getCountryList = () => {
  // return axios.get(dataUrl).then(res => res.data)
  return axios.get(dataUrl).then(res => res.data)
}