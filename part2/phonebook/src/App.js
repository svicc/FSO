import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  useEffect( ()=> {
    personService
      .getAll()
      .then(initialPersons=> {
        setPersons(initialPersons)
      })
  },[])
   
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchedName] = useState('')
  
  const [changeMessage, setChangeMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchName = (event) => {
    setSearchedName(event.target.value)
  }
  
  const addPerson= (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
      
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    const targetPersons = persons.filter(person => person.name === newName)
    if (targetPersons.length > 0) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const t_id = targetPersons[0].id
        personService
          .update(t_id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== t_id ? person : returnedPerson))
            setChangeMessage(
              `The number of ${personObject.name} is updated to ${personObject.number}.`
            )
            setTimeout(()=> {
              setChangeMessage(null)
            }, 4000)
          })
          .catch(error => {
            setErrorMessage(
              `Person ${newName} was already removed from server, try refresh to get lastest information.`
            )
            setTimeout(()=> {
              setErrorMessage(null)
            }, 4000)
          })

          
      }
    } else {
        personService
          .create(personObject)
          .then(returnedPersons => {
            setPersons(persons.concat(returnedPersons))
            setChangeMessage(
              `Person ${personObject.name} with number ${personObject.number} is added.`
            )
            setTimeout(()=> {
              setChangeMessage(null)
            }, 4000)
          })
    }
    setNewName('')
    setNewNumber('')
  }
  
  const removePerson = (name, id) => {
    if(window.confirm(`remove ${name} ?`)) {
      personService.remove(id)
      setPersons(persons.filter(n => n.id!=id))
    }
  }
  const Notification = ({ message, type }) => {
    const style= {
      color: 'green',
      borderStyle: 'solid',
      background: 'lightgrey',
      borderRadius: 5,
      padding: 10,
      fontStyle: 'italic',
      fontSize: 20 
    }
    if (message === null) {
      return null
    }
    if (type === 1) {
      style.color='red'
    }
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={changeMessage} type={0} />
      <Notification message={errorMessage} type={1} />
      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
        
      <h2> Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} removePerson={removePerson} />
    </div>
  )
}

export default App
