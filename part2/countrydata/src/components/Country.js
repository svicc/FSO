import axios from 'axios'
import { useState, useEffect } from 'react'

const Country = ({target}) => {
  const api_key = process.env.REACT_APP_API_KEY
  //const [weather_detail, setWeather] = useState({})
  const [temp, setTemp] = useState(-1)
  const [wind, setWind] = useState(-1)
  const [icon, setIcon] = useState("")
  const weather_link = `https://api.openweathermap.org/data/2.5/weather?q=${target.capital}&appid=${api_key}`
  useEffect( () => {
    axios
      .get(weather_link)
      .then(response => {
        console.log('get weather')
        /*
        const {main, wind, weather} = response.data
        setWeather({main, wind, weather})
        console.log(weather_detail)
        */
        setTemp(response.data.main.temp)
        setWind(response.data.wind.speed)
        setIcon(response.data.weather[0].icon)
      })
  },[api_key, target.capital, weather_link])
  return (
    <div>
      <h2> {target.name.common} </h2>
      <p> capital {target.capital} </p>
      <p> area {target.area} </p>
      <h3> languages: </h3>
      <ul>
        {
          Object.entries(target.languages)
            .map(([key, value]) => <li key={key}>{value}</li>)}
      </ul>
      <img src={target.flags.png} alt="flag" />
      <h2> Weather in {target.capital} </h2>
      <p> temperature: {temp} - 273.15 C </p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
      <p> wind: {wind} m/s </p>
      
    </div>
  )
}
export default Country
