import axios from 'axios'
import defaults from '../defaults.json'


const getAll = () =>
  axios.get(defaults.serverUrl).then(res => res.data)

const update = (id, newObject) =>
  axios.put(`${defaults.serverUrl}/${id}`, newObject).then(res => res.data)

const create = (newObject) =>
  axios.put(defaults.serverUrl, newObject).then(res => res.data)


export default {
  getAll,
  update,
  create,
}