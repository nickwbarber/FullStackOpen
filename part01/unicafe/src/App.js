import { useState } from "react";

// { good, bad, neutral } => Number
const calcAverage = (stats) => {
  if (stats.good === 0 && stats.bad === 0) {
    return 0
  }
  return ((stats.good - stats.bad) / (stats.good + stats.neutral + stats.bad))
}

// { good, bad, neutral } => Number
const calcPercentPositive = (stats) => {
  if (stats.good === 0 && stats.bad === 0) {
    return 0
  }
  return (stats.good / (stats.good + stats.bad + stats.neutral))
}

const Button = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const StatisticRow = ({ label, count }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{count}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  if (stats.good === 0 && stats.neutral === 0 && stats.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
    <thead>
      <tr>
        <td>name</td>
        <td>number</td>
      </tr>
    </thead>
    <tbody>
      <StatisticRow label={"good"} count={stats.good} />
      <StatisticRow label={"neutral"} count={stats.neutral} />
      <StatisticRow label={"bad"} count={stats.bad} />
      <StatisticRow label={"all"} count={stats.total} />
      <StatisticRow label={"average"} count={stats.average} />
      <StatisticRow label={"percent positive"} count={stats.percentPositive} />
    </tbody>
    </table>
  )
}


const App = () => {
  const [ stats, setStats ] = useState({
    "good" : 0,
    "bad" : 0,
    "neutral" : 0,
    "total" : 0,
    "average" : 0,
    "percentPositive" : 0,
  })

  const incGood = (stats) => {
    setStats({
      ...stats,
      good: stats.good + 1,
      total: stats.total + 1,
      average: calcAverage(stats),
      percentPositive: calcPercentPositive(stats),
    })
  }

  const incBad = (stats) => {
    setStats({
      ...stats,
      bad: stats.bad + 1,
      total: stats.total + 1,
      average: calcAverage(stats),
      percentPositive: calcPercentPositive(stats),
    })
  }

  const incNeutral = (stats) => {
    setStats({
      ...stats,
      neutral: stats.neutral + 1,
      total: stats.total + 1,
      average: calcAverage(stats),
      percentPositive: calcPercentPositive(stats),
    })
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button label="good" handleClick={() => incGood(stats)}/>
      <Button label="neutral" handleClick={() => incNeutral(stats)}/>
      <Button label="bad" handleClick={() => incBad(stats)}/>

      <h1>statistics</h1>
      <Statistics stats={stats}/>
    </div>
  );
}

export default App;
