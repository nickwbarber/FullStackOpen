export const CountryList = ({ countryList }) => {
  return countryList ? (
    <ul>
      {countryList.map(entry => entry.name.common).map((name, i) => <li key={i}>{name}</li>)}
    </ul>
  ) : <div>loading...</div>
}
