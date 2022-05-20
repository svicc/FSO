import Country from './Country'
import {useState} from 'react'
const Countries = ({countries, searchName}) => {
  const [clickedCountry, setClickedCountry] = useState([])
  const targetCountries = 
        countries.filter(country => country.name.common.toLowerCase().includes(searchName))
  if (targetCountries.length > 10) {
    if (clickedCountry.length>0) {
      setClickedCountry([])
    }
    if (searchName ==="") {
      return("Start search")
    }
    return( "Too many matches, specify another filter" )
  }
  if (targetCountries.length === 1) {
    return (
      <div>
        <Country target={targetCountries[0]}/>
      </div>
    )
  }
 
  if (targetCountries.length === 0) {
    return("No countries found")
  }

  const handleClick = ({country}) => {
    console.log('clicked')
    setClickedCountry(clickedCountry.concat(country))
  }

  if (clickedCountry.length > 0) {
    return ( <Country target={clickedCountry[0]}/> )
  }

  return(
  	<ul>
      {
        targetCountries
          .map(country => 
            <li key={country.ccn3}>{country.name.common} 
            <button onClick={() => handleClick(country={country})}> Click me </button>
            </li>
          )
      }
    </ul>
  )
}
export default Countries
