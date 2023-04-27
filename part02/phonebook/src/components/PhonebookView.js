const PhonebookListing = ({ person }) =>
  <div>{person.name} {person.number}</div>

const PhonebookView = ({ persons, query }) =>
  persons
  .filter(person =>
    query
    ? person.name.toLowerCase().startsWith(query.toLowerCase())
    : true
  )
  .map((person, i) =>
    <PhonebookListing key={i} person={person}></PhonebookListing>
  )
        
export default PhonebookView
