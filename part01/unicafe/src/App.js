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
  const calcAverage = (good, bad, neutral) => {
    if (good === 0 && bad === 0) {
      return 0 
    }
    return ((good - bad) / (good + neutral + bad))
  }
  const calcPercentPositive = (good, bad, neutral) => {
    if (good === 0 && bad === 0) {
      return 0 
    }
    return (good / (good + bad + neutral))
  }


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
      <StatDisplay label="total" count={good + bad + neutral} />
      <StatDisplay label="average" count={calcAverage(good, bad, neutral)} />
      <StatDisplay label="positive" count={calcPercentPositive(good, bad, neutral) + ' %'} />
    </div>
  );
}

export default App;
