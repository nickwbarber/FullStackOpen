import { WeatherDisplay } from "./WeatherDisplay"
import { useCountryState } from "./CountryContext"

export const CountryInfoDisplay = () => {
  const countryState = useCountryState() 
  const country = countryState.selectedCountry
  
  if (Object.keys(country).length === 0) {return (<></>)}

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        capital: {country.capital[0]}
        <br/>
        area: {country.area}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages)
          .map((language, i) =>
            <li key={i}>{language}</li>)
        }
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
      <WeatherDisplay/>
    </div>
  )
}