import { useState } from "react";

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

const Button = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const StatisticLine = ({ label, count }) => <div>{label} {count}</div>

const Statistics = ({ stats }) => {
  if (stats.good === 0 && stats.neutral === 0 && stats.bad === 0) {
    return (<div>
      No feedback given
    </div>)
  }
  return (
    <div>
      <StatisticLine label="good"      count={stats.good} />
      <StatisticLine label="neutral"   count={stats.neutral} />
      <StatisticLine label="bad"       count={stats.bad} />
      <StatisticLine label="total"     count={stats.good + stats.bad + stats.neutral} />
      <StatisticLine label="average"   count={calcAverage(stats.good, stats.bad, stats.neutral)} />
      <StatisticLine label="positive"  count={calcPercentPositive(stats.good, stats.bad, stats.neutral) + ' %'} />
    </div>
  )
}

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
      <Statistics stats={{"good":good, "neutral":neutral, "bad":bad}}/>
    </div>
  );
}

export default App;
