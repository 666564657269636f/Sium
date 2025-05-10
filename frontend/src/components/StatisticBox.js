import "../styles/StatisticBox.css"

const StatisticBox = ({ value, label }) => {
  return (
    <div className="statistic-box">
      <div className="statistic-value">{value}</div>
      <div className="statistic-label">{label}</div>
    </div>
  )
}

export default StatisticBox
