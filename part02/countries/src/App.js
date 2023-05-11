// components
import { CountryProvider } from './components/CountryContext'
import { QueryForm } from './components/QueryForm'
import { CountryList } from './components/CountryList'
import { CountryInfoDisplay } from './components/CountryInfoDisplay'

const App = () => {
  return (
    <CountryProvider>
      <QueryForm />
      <CountryList />
      <CountryInfoDisplay />
    </CountryProvider>
  )
}

export default App
