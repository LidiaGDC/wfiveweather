import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CorrectedDate from "./CorrectedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            className="border border-secondary rounded"
            placeholder="Enter a city name..."
          />
          <input
            type="submit"
            className="border border-secondary rounded button"
            value="Search"
          />
        </form>

        <h1>
          {" "}
          Results for <span className="city-picked"> {props.defaultCity} </span>
        </h1>
        <div className="row">
          <div className="col-3 current-temp">
            <img
              className="icon-weather"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
            />
            <span className="number">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-3 weather-data">
            <ul>
              <li> Humidity: {weatherData.humidity} % </li>
              <li> Wind: {weatherData.wind} Km/h </li>
            </ul>
          </div>

          <div className="col-6 date-info">
            <ul>
              <li className="right-title"> Weather </li>
              <li className="weekday ">
                {" "}
                <CorrectedDate date={weatherData.date} />
              </li>
              <li className="img-description text-capitalize">
                {" "}
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `aabb459045170c682b91ab6157b00f6a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <h3>Loading ...</h3>;
  }
}
