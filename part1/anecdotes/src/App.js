import { useState } from 'react'
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [most_vote, setMostVote] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const copy = [...points]

  const getRandomInt = (max) => {
    console.log(max)
    max = Math.floor(max)
    console.log(Math.floor(Math.random()*max))
      
    return Math.floor(Math.random()*max)
  }
  const updateCopy = () => {
    console.log('p', points)
    console.log(copy)
    copy[selected] += 1
    if (copy[selected] > copy[most_vote]) {
      setMostVote(selected)
    }
    setPoints(copy)
  }
  return (
    <div >
      <h1> Anecdote of the day </h1> 
      <p> {anecdotes[selected]} </p>
      <p> has {copy[selected]}  votes </p>
      <Button handleClick={ () => updateCopy()} text='vote' />
      <Button handleClick={ () => setSelected(getRandomInt(anecdotes.length)) } text='next' />
      <h1> Anedote with most votes </h1>
      <p> {anecdotes[most_vote]} </p>
    </div>

  );
}

export default App;
