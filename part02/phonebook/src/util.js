import { useState } from 'react'

const NewState = defaultValue => {
  const [ value, setter ] = useState(defaultValue)
  return {
    value: value,
    setter: setter,
    defaultValue: defaultValue,
  }
}

export default NewState
