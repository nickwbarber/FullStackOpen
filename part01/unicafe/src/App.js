import { useState } from "react";

const Button = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const StatDisplay = ({ label, count }) => <div>{label} {count}</div>

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  
  const incGood = () => setGood(good + 1)
  const incBad = () => setBad(bad + 1)
  const incNeutral = () => setNeutral(neutral + 1)
  
  return (
    <div>
      <h1>give feedback</h1>

      <Button label="good" handleClick={incGood}/>
      <Button label="neutral" handleClick={incNeutral}/>
      <Button label="bad" handleClick={incBad}/>
    
      <h1>statistics</h1>
      <StatDisplay label="good" count={good} />
      <StatDisplay label="neutral" count={neutral} />
      <StatDisplay label="bad" count={bad} />
    </div>
  );
}

export default App;
