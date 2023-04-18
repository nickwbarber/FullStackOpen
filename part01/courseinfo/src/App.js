
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}


const Total = (props) => {
  const sum = (a, b) => a + b
  return (
    <p>
      Number of exercises {
        props.parts
        .map(part => part.exercises)
        .reduce(sum, 0)
      }
    </p>
  )
}

const App = () => {
  console.log(`time: ${(new Date()).toLocaleTimeString()}`) // LOGGING
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
