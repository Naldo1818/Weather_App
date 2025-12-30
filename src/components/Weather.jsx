import React, { useEffect } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

const Weather = () => {

    const inputRef = React.useRef();
    const[weatherData, setWeatherData] = React.useState(false);


const allIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09d": drizzleIcon,
    "09n": drizzleIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": rainIcon,
    "11n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon
};

const search = async (city) => {
    if(city === "") {alert("Please enter a city name");return;}
    try {
        const API_KEY = import.meta.env.VITE_APP_ID;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const icon = allIcons[data.weather[0].icon] || clearIcon;
        setWeatherData({
            humidity: data.main.humidity,
            windspeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        });
            
    } catch (error) {

    }
}

useEffect(() => {
    search('Plettenberg Bay');
}, [])

  return (
    <div className='weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder='Search' />
        <img src={searchIcon} alt="Search" onClick={() => search(inputRef.current.value)}></img>
      </div>
        <img src={weatherData?.icon} alt="Clear" className='weatherIcon'></img>
        <p className='temperature'>{weatherData?.temperature}°C</p>
        <p className='location'>{weatherData?.location}</p>

<div className="weather-data">

    <div className="col">
        <img src={humidityIcon} alt="Humidity"></img>
        <div>
            <p>{weatherData?.humidity}%</p>
            <span>Humidity</span>
        </div>
    </div>

    <div className="col">
        <img src={windIcon} alt="Wind Speed"></img>
        <div>
            <p>{weatherData?.windspeed} km/h</p>
            <span>Wind Speed</span>
        </div>
    </div>
 </div>

</div>
  )
}

export default Weather
