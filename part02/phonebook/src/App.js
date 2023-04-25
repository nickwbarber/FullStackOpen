import { useState } from 'react'

const defaultInputString = 'enter name here...'

const PhonebookListing = ({ name }) => {
  <div>{name}</div>
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
  ])

  const [ newName, setName ] = useState(defaultInputString)

  const handleSubmit = e => {
    e.preventDefault()
    setPersons([...persons, {name: newName}])
    setName('')
  }
  
  const handleInputFocus = e => {
    if (newName === defaultInputString) {
      setName('')
      return
    }
  }
  
  const handleInputBlur = e => {
    if (newName === '') {
      setName(defaultInputString)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={newName} 
            onChange={e => setName(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <div key={p.name}>{p.name}</div>)}
      </div>
    </div>
  );
}

export default App;
