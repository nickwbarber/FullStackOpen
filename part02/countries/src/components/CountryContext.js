import { createContext, useEffect, useReducer, useContext } from "react";
import { getCountries } from "../services/api";


const initialState = {
  countries: [],
  searchResults: [],
  selectedCountry: {},
}

const CountryContext = createContext(initialState);
const CountryDispatchContext = createContext();

export const CountryProvider = ({ children }) => {

  const [countryState, dispatch] =
    useReducer(countryReducer, initialState)
  
  useEffect(() => {
    const getData = async () => {
      const data = await getCountries()
      dispatch({ type: 'load_countries', countries: data })
    }
    getData()
  }, []) 

  return (
    <CountryContext.Provider value={countryState}>
      <CountryDispatchContext.Provider value={dispatch}>
        {children}
      </CountryDispatchContext.Provider>
    </CountryContext.Provider>
  )
}

export const useCountryState = () => {
  const countryState = useContext(CountryContext)
  if (countryState === undefined) {
    throw new Error('`useCountryData` must be used within a CountryProvider')
  }
  return countryState
}

export const useCountryDispatch = () => {
  const dispatchContext = useContext(CountryDispatchContext)
  if (dispatchContext === undefined) {
    throw new Error('`useCountryDispatch` must be used within a CountryProvider')
  }
  return dispatchContext
}
  
const countryReducer = (state, action) => {
  switch (action.type) {
      
    case 'load_countries': {
      return { ...state,
        countries: action.countries
      }
    }

    case 'update_search_results': {
      return { ...state,
        searchResults: action.countries
      }
    }
    
    case 'clear_search_results': {
      return { ...state,
        searchResults: []
      }
    }

    case 'select_country': {
      return { ...state,
        selectedCountry: action.country
      }
    }
    
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }

  }
}