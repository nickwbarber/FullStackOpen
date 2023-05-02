// external libraries
import { useEffect } from 'react'

// defaults
import defaults from './defaults.json'

// helper functions
import NewState from './util'
import { getAll } from './services/phonebook'

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
  
  // fetch persons from database
  useEffect(() => {
    getAll()
    .then(returnedPersons => {
      personsState.setter(returnedPersons)
    })
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
          personsState={personsState}
          query={queryState.value}>
        </PhonebookView>
      </div>
    </div>
  );
}

export default App
