const handleInputFocus = ({ value, setter, defaultValue }) => () => {
  if (value === defaultValue) {
    setter('')
    return
  }
}

const handleInputBlur = ({ value, setter, defaultValue }) => () => {
  if (value === '') {
    setter(defaultValue)
  }
}

const getInputHandler = stateObject => {
  return {
    onFocus: handleInputFocus(stateObject),
    onBlur: handleInputBlur(stateObject),
  }
}

const EntryForm = ({ nameState, phonenumberState, personsState }) => {

  const nameInputHandler        = getInputHandler(nameState)
  const phonenumberInputHandler = getInputHandler(phonenumberState)

  const handleSubmit = e => {
    e.preventDefault()

    // no blank or default entries
    if ((nameState.value === '') || (nameState.value === nameState.defaultValue)) {
      nameState.setter('')
      return
    }

    // prevent duplicate names
    if (personsState.value.map(p => p.name).includes(nameState.value)) {
      alert(`${nameState.value} is already in the phonebook!`)
      nameState.setter('')
      return
    }

    // happy path
    // TODO: update backend when a new number is submitted via this form
    personsState.setter([...personsState.value, {name: nameState.value, number: phonenumberState.value}])
    nameState.setter('')
    phonenumberState.setter('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>new entry</h3>
      <div>
        name: <input
          value     = {nameState.value}
          onChange  = {e => nameState.setter(e.target.value)}
          onFocus   = {nameInputHandler.onFocus}
          onBlur    = {nameInputHandler.onBlur}
        />
      </div>
      <div>
        number: <input
          value     = {phonenumberState.value}
          onChange  = {e => phonenumberState.setter(e.target.value)}
          onFocus   = {phonenumberInputHandler.onFocus}
          onBlur    = {phonenumberInputHandler.onBlur}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default EntryForm
