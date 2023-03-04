//hava durumu project
import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import { WiDayCloudy } from 'react-icons/wi';
import axios from 'axios';
import './css/index.css';
import './css/weather.css';

function App() {
  const [weather, setweather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (lat, long) => {
    const key = process.env.REACT_APP_WEATHER_DATA;
    console.log(weather)
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
      setweather(data);
    } catch {
      alert("Hava durumu bilgileri alınamadı")
    }
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude)
  }, [latitude, longitude])


  if (!weather) {
    return <div>loading...</div>
  }
  return (
    <div className="content">
      <h1>Weather <WiDayCloudy/> </h1>
      <div className='weather'>
        <div className='weather-location'>
          <span>lat : {weather.coord.lat} </span>
          <span>long: {weather.coord.lon}</span>
        </div>
        <div className='weather-degree'>
          <span> {Math.round(weather.main.temp - 272.15)} °C</span>
        </div>
        <div className='weather-date'>
          <span>{new Date(weather.dt * 1000).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}


export default App;


//covid project
// import React, {useState , useEffect} from 'react';
// import axios from 'axios';
// import './body.css';



// function App() {
//   const [data, setData] = useState("");
//   const [date, setDate] = useState("");

//   useEffect(() => {
//     axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
//     .then(res => setData(res.data[date]))
//     .catch(err => console.log(err))
//   },[data , date])
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row">
//           <div className="col-8 mx-auto mt-4">
//             <h1 className="text-center text-white display-3 mb-4">Tükiye Covid-19 Arama Motoru</h1>
//             <input placeholder="GG/AA/YYYY" className="form-control mb-4" onChange={(e) => setDate(e.target.value)}/>
//             <table className="table table-striped text-white">
//               <thead>
//                 <tr>
//                   <th scope="col">Tarih</th>
//                   <th scope="col">Test Sayısı</th>
//                   <th scope="col">Hasta Sayısı</th>
//                   <th scope="col">Vefat Sayısı</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className={data === undefined ? "bg-danger" : "bg-success"}>
//                   <th scope="row">{data === undefined ? "Veri bekleniyor" : data.date}</th>
//                   <td >{data === undefined ? "Veri bekleniyor" : data.tests}</td>
//                   <td>{data === undefined ? "Veri bekleniyor" : data.patients}</td>
//                   <td>{data === undefined ? "Veri bekleniyor" : data.deaths}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default App;

