import { useEffect, useState } from "react"
import { useCountryState, useCountryDispatch } from "./CountryContext"


export const QueryForm = () => {
  const [ query, setQuery ] = useState('')
  const countryState = useCountryState()
  const countryDispatch = useCountryDispatch()

  useEffect(() => {
    const matchedCountries =
      query.length === 0 ? []
        : countryState.countries
          .filter(country =>
            country.name.common.toLowerCase()
            .includes(query.toLowerCase())
          )

    countryDispatch({
      type: 'update_search_results',
      countries: matchedCountries,
    })

    if (matchedCountries.length === 1) {
      countryDispatch({
        type: 'select_country',
        country: matchedCountries[0],
      })
    }
  }, [query, countryDispatch, countryState.countries])

  return (
    <div>
      find countries:
      <input onChange={e => setQuery(e.target.value)}/>
    </div>
  )
}
