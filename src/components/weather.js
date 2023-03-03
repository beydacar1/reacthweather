
import '../css/weather.css';

const Weather = (props) => {
    const {weather} =   props;
    const degree = Math.round(weather.main.temp - 272.15);
    const date = new Date(weather.dt * 1000).toLocaleDateString();

    if(!weather) {
        return <div className='loading'>loading...</div>
    }
  return (
    <div className='weather'>
    <div className='weather-location'>
        <span>lat : {weather.coord.lat} </span>
        <span>long: {weather.coord.lon}</span>
    </div>
    <div className='weather-degree'>
        <span> {degree} °C</span>
    </div>
    <div className='weather-date'>
        <span>{date}</span>
    </div>
    </div>
  )
}
export default Weather;