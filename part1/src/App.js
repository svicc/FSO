const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
   return(
     <div>
       <p>
         {props.p} {props.e} 
       </p>
     </div>
   )
}
const Content = (props) => {
  const p1 = props.part1
  const e1 = props.exercises1

  const p2 = props.part2
  const e2 = props.exercises2
   
  const p3 = props.part3
  const e3 = props.exercises3
  return(
    <div>
      <Part p={p1} e={e1} />
      <Part p={p2} e={e2} />
      <Part p={p3} e={e3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack app dev'
  const part1 = 'Fundamentals of React'  
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> 
    </div>
  );
}

export default App;
