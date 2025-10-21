import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo]  = useState({
    city: "Delhi",
      feelslike: 24.84 ,
      temp:  2.05,
      tempMin: 25.05 ,
      tempMax:  25.05,
      humidity: 47,
      weather: "haze",
    });

    let updateInfo = (result) => {
      setWeatherInfo(result);
    }

  return (
    <>
    <div style={{textAlign: "center"}}>
      <h2>Weather App by Kratika</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
    </>
  )
}