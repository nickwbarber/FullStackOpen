const MAX_SEARCH_RESULT_LENGTH = 10
const SEARCH_INSTRUCTION_MESSAGE = "Type a country name in the search bar."
const TOO_MANY_RESULTS_MESSAGE = "Too many results! Try typing more."
const LOADING_MESSAGE = "loading..."

export const CountryList = ({ countries }) =>
  countries === null
  ? <div>{LOADING_MESSAGE}</div>
  : countries.length === 0
    ? <div>{SEARCH_INSTRUCTION_MESSAGE}</div>
    : countries.length === 1
      ? <div></div>
      : countries.length <= MAX_SEARCH_RESULT_LENGTH
        ? <ul>
            {countries.map(
              (country, i) => <li key={i}>{country.name.common}</li>
            )}
          </ul>
        : <div>{TOO_MANY_RESULTS_MESSAGE}</div>
