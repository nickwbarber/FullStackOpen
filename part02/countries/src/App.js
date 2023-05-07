import { useEffect, useState } from 'react'
import { QueryForm } from './components/QueryForm'
import { CountryList } from './components/CountryList'
import { CountryInfoDisplay } from './components/CountryInfoDisplay'
import { getCountryList } from './services/api'

const App = () => {
  const [ query, setQuery ] = useState("")
  const [ countryList, setCountryList ] = useState(null)
  
  useEffect(() => {
    getCountryList().then(data => setCountryList(data))
  }, [])

  return (
    <div>
      <QueryForm querySetter={setQuery}></QueryForm>
      <CountryList countryList={countryList}></CountryList>
      <CountryInfoDisplay></CountryInfoDisplay>
    </div>
  )
}

export default App
