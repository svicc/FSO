import { useState } from 'react'
const Header = props => (<div> <h1>{props.name}</h1> </div>)

const Button = props => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Option = ({name, value}) => (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
)


const Statistics = props => {
  const sum = props.bad+props.good+props.neutral
  if (sum === 0) {
    return (
      <div>
        No feedback given 
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Option name='good' value={props.good} />  
          <Option name='neutral' value={props.neutral} />  
          <Option name='bad' value={props.bad} />  
          <Option name='all' value={sum} />  
          <Option name='average' value={(-props.bad+props.good)/sum} />  
          <Option name='positive' value={props.good/sum} />  
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToValue = (fn, newValue) => {
    console.log('value: ', newValue)
    console.log(fn.toString())
    fn(newValue)
  }
  return (
    <div>
      <Header name='give feedback' />
      <Button handleClick={() => setToValue(setGood, good + 1)} text="good" />
      <Button handleClick={() => setToValue(setNeutral, neutral+ 1)} text="neutral" />
      <Button handleClick={() => setToValue(setBad, bad+ 1)} text="bad" />
      <Header name='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
