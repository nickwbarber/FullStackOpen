import defaults       from './defaults.json'
import NewState       from './util'
import PhonebookView  from './components/PhonebookView'
import EntryForm      from './components/EntryForm'
import QueryForm      from './components/QueryForm'

const App = () => {
  const nameState         = NewState(defaults.name)
  const personsState      = NewState(defaults.persons)
  const phonenumberState  = NewState(defaults.number)
  const queryState        = NewState(defaults.query)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <EntryForm nameState={nameState} phonenumberState={phonenumberState} personsState={personsState} ></EntryForm>
      </div>
      <h2>Numbers</h2>
      <h3>Filter by name: </h3>
      <div>
        <QueryForm queryState={queryState}></QueryForm>
      </div>
      <div>
        <PhonebookView persons={personsState.value} query={queryState.value}></PhonebookView>
      </div>
    </div>
  );
}

export default App
