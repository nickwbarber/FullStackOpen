const handleQuery = (querySetter, setHasUserSearched) => event => {
  querySetter(event.target.value)
  setHasUserSearched(true)
}

export const QueryForm = ({ querySetter, setHasUserSearched }) => {
  return (
    <div className="queryForm">
      find countries: <input onChange={handleQuery(querySetter, setHasUserSearched)}/>
    </div>
  )
}
