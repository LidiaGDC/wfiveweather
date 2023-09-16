import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = `aabb459045170c682b91ab6157b00f6a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="border border-secondary rounded"
            placeholder="Enter a city name..."
            onChange={handleCityChange}
          />
          <input
            type="submit"
            className="border border-secondary rounded button"
            value="Search"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h3>Loading ...</h3>;
  }
}
