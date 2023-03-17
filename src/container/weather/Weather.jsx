import React, { useState } from 'react';
import axios from 'axios';
import Current from "./Current"


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [currentLocation,setCurrentLocation]=useState(false);

  const API_KEY = '7544b23f2ade4935d6b8d507c9df49f2';

  const fetchWeatherData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    setWeatherData(response.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <button onClick={()=>setCurrentLocation(!currentLocation)}>Current Location</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <li>{weatherData.weather[0].description}</li>
          <li>Temperature: {weatherData.main.temp}°C</li>
          <li>Feels like: {weatherData.main.feels_like}°C</li>
          <li>Humidity: {weatherData.main.humidity}%</li>
          <li>Wind speed: {weatherData.wind.speed}m/s</li>
        </div>
      )}
      
      {
        (currentLocation)?
        
        <Current/> 
        
        :
        <></>
      }
      
    </div>
  );
}

export default App;
