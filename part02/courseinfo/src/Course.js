const Course = ({ course }) => {
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total key={course.id} course={course} />
    </>
  )
}

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <>
    {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Total = ({ course }) => {
  const total = course.parts
    .map(part => part.exercises)
    .reduce(
      (prev, curr) => prev + curr,
      0
    )

  return (
    <h3>total of {total} exercises</h3>
  )
}

export default Course