import React, { useEffect, useState } from 'react';

function Nine() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=b07edd01b6c9aafc7b1419bb2263c897&units=metric`)
          .then((response) => response.json())
          .then((data) => setWeather(data))
          .catch((error) => console.error('Error fetching weather data:', error));
      });
    }
  }, []);

  return (
    <div className='flex justify-center items-center m-10'>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.current.temp}°C</p>
          <p>Conditions: {weather.current.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Nine;
