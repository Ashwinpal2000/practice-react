import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchWeatherData = async () => {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
   
      const apiKey = '7544b23f2ade4935d6b8d507c9df49f2';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      
    };
    fetchWeatherData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div>
      <h1>Current Location</h1>
      {weatherData ? (
        <WeatherDisplay weatherData={weatherData}  />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

function WeatherDisplay({ weatherData}) {
  const { name, main } = weatherData;
  const temperature = Math.round(main.temp - 273.15);
  const feelsLike = Math.round(main.feels_like - 273.15);
  
  return (
    <div>
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Feels like: {feelsLike}°C</p>
    
    </div>
  );
}

export default WeatherApp;
