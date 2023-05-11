import { useCountryState, useCountryDispatch } from "./CountryContext"

const MAX_SEARCH_RESULT_LENGTH = 10
const SEARCH_INSTRUCTION_MESSAGE = "Type a country name in the search bar."
const TOO_MANY_RESULTS_MESSAGE = "Too many results! Try typing more."
const LOADING_MESSAGE = "loading..."

export const CountryList = () => {
  const countryState = useCountryState()
  const countryDispatch = useCountryDispatch()
  const searchResults = countryState.searchResults
  
  if (countryState.countries.length === 0) {
    return (<div>{LOADING_MESSAGE}</div>)
  }

  if (searchResults.length === 0) {
    return (<div>{SEARCH_INSTRUCTION_MESSAGE}</div>)
  }

  if (searchResults.length === 1) {
    return (<div></div>)
  }

  if (searchResults.length > MAX_SEARCH_RESULT_LENGTH) {
    return (<div>{TOO_MANY_RESULTS_MESSAGE}</div>)
  }

  const handleClick = country => {
    countryDispatch({
      type: 'select_country',
      country: country,
    })
    countryDispatch({
      type: 'clear_search_results',
    })
    searchResults.length = 0
  }

  return (
    <ul>
      {searchResults.map((country, i) =>
        <div key={i}>
          <li>
            {country.name.common}
          </li> <button onClick={() => handleClick(country)}>
            select
          </button>
        </div>
      )}
    </ul>
  )
}
