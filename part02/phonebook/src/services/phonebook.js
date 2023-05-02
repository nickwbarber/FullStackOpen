import axios from 'axios'
import defaults from '../defaults.json'
import { max } from '../util'


export const getAll = () =>
  axios.get(defaults.serverUrl).then(res => res.data)

export const update = (id, newObject) =>
  axios.put(`${defaults.serverUrl}/${id}`, newObject).then(res => res.data)

export const create = (newObject) =>
  axios.post(defaults.serverUrl, newObject).then(res => res.data)

export const deleteEntry = id =>
  axios.delete(`${defaults.serverUrl}/${id}`).then(res => res.data)

export const handleDelete = (idToDelete, personsState) => event => {
  const personToDelete = personsState.value.find(person => person.id === idToDelete)

  deleteEntry(idToDelete)
  .then(() => {
    personsState.setter(
      personsState.value
      .filter(person => person.id !== personToDelete.id)
    )
  })
}

export const handleSubmit = (nameState, phonenumberState, personsState) => event => {
  event.preventDefault()

  // no blank or default entries
  if (
    (
      (nameState.value === '')
      || (nameState.value === nameState.defaultValue)
    )
    || (phonenumberState.value === '')
  ) {
    nameState.setter('')
    phonenumberState.setter('')
    return
  }

  // prevent duplicate names
  if (personsState.value.map(p => p.name).includes(nameState.value)) {
    alert(`${nameState.value} is already in the phonebook!`)
    nameState.setter('')
    phonenumberState.setter('')
    return
  }
  
  // happy path
  create({
    id: max(personsState.value) + 1,
    name: nameState.value,
    number: phonenumberState.value,
  })
  .then(returnedListing => {
    nameState.setter('')
    phonenumberState.setter('')
    personsState.setter(personsState.value.concat(returnedListing))
  })
}
