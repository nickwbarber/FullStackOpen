const QueryForm = ({ queryState }) =>
  <input value={queryState.value} onChange={e => queryState.setter(e.target.value)}></input>

export default QueryForm
