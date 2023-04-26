import { useState } from 'react'

const defaultNameString = 'enter name here...'
const defaultPhonenumberString = '555-555-5555'

const PhonebookListing = ({ person }) =>
  <div>{person.name} {person.number}</div>

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '555-555-5555'},
  ])

  const [ newName, setName ] = useState(defaultNameString)
  const [ newPhonenumber, setPhonenumber ] = useState(defaultPhonenumberString)

  const handleSubmit = e => {
    e.preventDefault()
    
    // no blank or default entries
    if ((newName === '') || (newName === defaultNameString)) {
      setName('')
      return
    }

    // prevent duplicate names
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already in the phonebook!`)
      setName('')
      return
    }

    // happy path
    setPersons([...persons, {name: newName, number: newPhonenumber}])
    setName('')
    setPhonenumber('')
  }

  const handleInputFocus = (value, setter, defaultString) => () => {
    if (value === defaultString) {
      setter('')
      return
    }
  }

  const handleInputBlur = (value, setter, defaultString) => () => {
    if (value === '') {
      setter(defaultString)
    }
  }
  
  // input focus + blur handlers
  const handleNameInputOnFocus = handleInputFocus(newName, setName, defaultNameString)
  const handleNameInputOnBlur = handleInputBlur(newName, setName, defaultNameString)
  const handlePhonenumberInputOnFocus = handleInputFocus(newPhonenumber, setPhonenumber, defaultPhonenumberString)
  const handlePhonenumberInputOnBlur = handleInputBlur(newPhonenumber, setPhonenumber, defaultPhonenumberString)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={newName}
            onChange={e => setName(e.target.value)}
            onFocus={handleNameInputOnFocus}
            onBlur={handleNameInputOnBlur}
          />
        </div>
        <div>
          number: <input
            value={newPhonenumber}
            onChange={e => setPhonenumber(e.target.value)}
            onFocus={handlePhonenumberInputOnFocus}
            onBlur={handlePhonenumberInputOnBlur}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((p, i) => <PhonebookListing key={i} person={p} />)}
      </div>
    </div>
  );
}

export default App;
