export const CountryInfoDisplay = ( { country }) => {
  return country !== null && typeof(country) === 'object' && country.name ?
    <div>found it! {country.name.common}</div>
    : <div></div>
}