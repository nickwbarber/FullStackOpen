import axios from 'axios'
import defaults from '../defaults.json'


const getAll = () =>
  axios.get(defaults.serverUrl).then(res => res.data)

const update = (id, newObject) =>
  axios.put(`${defaults.serverUrl}/${id}`, newObject).then(res => res.data)

const create = (newObject) =>
  axios.post(defaults.serverUrl, newObject).then(res => res.data)

const handleSubmit = (nameState, phonenumberState, personsState) => event => {
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
  console.log(personsState.value)
  create({
    id: personsState.value.length + 1,
    name: nameState.value,
    number: phonenumberState.value,
  })
  .then(returnedListing => {
    nameState.setter('')
    phonenumberState.setter('')
    personsState.setter(personsState.value.concat(returnedListing))
  })
}

export default {
  getAll,
  update,
  create,
  handleSubmit,
}