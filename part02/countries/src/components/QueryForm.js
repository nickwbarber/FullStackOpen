const handleQuery = querySetter => event =>
  querySetter(event.target.value)

export const QueryForm = ({ querySetter }) => {
  return (
    <div className="queryForm">
      find countries: <input onChange={handleQuery(querySetter)}/>
    </div>
  )
}
