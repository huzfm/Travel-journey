
//using openWeatherAPI

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Weather = ({ location }) => {
      const apiKey = '23e49361036cac859850b6f3e9f5bfd3';
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const [weatherData, setWeatherData] = useState(null);
      const [error, setError] = useState(null);

      const fetchWeather = async (location) => {
            const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
            try {
                  const response = await fetch(url);
                  if (!response.ok) throw new Error("Failed to fetch weather data.");
                  const data = await response.json();
                  setWeatherData(data);
            } catch (error) {
                  setError("Error fetching weather data. Please try again.");
                  console.error("Error in fetching data:", error);
            }
      };

      // Fetch weather data when the component mounts or when `location` changes
      useEffect(() => {
            if (location) fetchWeather(location);
            // console.log(fetchWeather(location));
      }, [location]);

      return (
            <div className="weather-container">
                  <h1 className="text-5xl font-bold mb-4">{location}</h1>

                  {error && <p className="text-red-500">{error}</p>}

                  {weatherData ? (
                        <div className="weather-details">
                              <p className="text-lg">
                                    <strong>Temperature:</strong> {weatherData.main.temp}°C
                              </p>


                        </div>
                  ) : (
                        !error && <p>Loading weather data...</p>
                  )}
            </div>
      );
};

// Add PropTypes validation for the `location` prop
Weather.propTypes = {
      location: PropTypes.string.isRequired,
};

export default Weather;
