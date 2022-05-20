const Header = (args) => {
  return(
    <div>
      <h1>{args.name}</h1>
    </div>
  )
}

const Part = (props) => {
   return(
     <div>
       <p>{props.p} {props.e}</p>
     </div>
   )
}
const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => 
        <Part key={part.id} p={part.name} e={part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  return(
    <div>
      <p>Number of exercises {parts.reduce( (total,cur) => total+cur.exercises,0 )}</p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> 
    </div>
  )
}


export default Course;
