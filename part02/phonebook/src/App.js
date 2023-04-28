// external libraries
import { useEffect } from 'react'
import axios from 'axios'

// defaults
import defaults from './defaults.json'

// helper functions
import NewState from './util'

// components
import PhonebookView  from './components/PhonebookView'
import EntryForm      from './components/EntryForm'
import QueryForm      from './components/QueryForm'

// main
const App = () => {
  const nameState         = NewState(defaults.name)
  const personsState      = NewState(defaults.persons)
  const phonenumberState  = NewState(defaults.phonenumber)
  const queryState        = NewState(defaults.query)

  useEffect(() => {
    axios
    .get(`${defaults.serverUrl}/persons`)
    .then(response => {
      personsState.setter(response.data)
    })
  // }, [personsState])
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <EntryForm
          nameState={nameState}
          phonenumberState={phonenumberState}
          personsState={personsState}
        >
        </EntryForm>
      </div>
      <h2>Numbers</h2>
      <h3>Filter by name: </h3>
      <div>
        <QueryForm
          queryState={queryState}>
        </QueryForm>
      </div>
      <div>
        <PhonebookView
          persons={personsState.value}
          query={queryState.value}>
        </PhonebookView>
      </div>
    </div>
  );
}

export default App
