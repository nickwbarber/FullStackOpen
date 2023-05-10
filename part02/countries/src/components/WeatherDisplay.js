export const WeatherDisplay = ({ country, weather }) => {
  if (!weather) return
  return (
    <div>
      <h2>Weather in {country.capital[0]}</h2>
      <h3>{weather.current.condition.text}</h3>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
      <p>temperature: {weather.current.temp_c}°C</p>
      <p>wind: {weather.current.wind_dir} @ {weather.current.wind_kph}kph</p>
    </div>
  )
}
