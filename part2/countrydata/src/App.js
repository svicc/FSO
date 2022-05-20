import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  
  const handleSearchName = (event) => {
    event.preventDefault()
    setSearchName(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('data got')
        setCountries(response.data)
      })
  },[])
  return (
    <div>
      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
      <Countries countries={countries} searchName={searchName}/>
    </div>
  );
}

export default App;
