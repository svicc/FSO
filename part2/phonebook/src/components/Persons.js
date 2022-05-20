const Persons = ({persons, searchName, removePerson}) => {
  return(
  	<ul>
      {
        persons.filter(person => person.name.toLowerCase().includes(searchName))
          .map(person => <li key={person.id}>
              {person.name} {person.number} <button onClick={()=>removePerson(person.name, person.id)}> delete </button> </li>)
      }
    </ul>
  )
}
export default Persons
