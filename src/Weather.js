import React from "react";
import "./Weather.css";

export default function Weather() {
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
        Results for <span className="city-picked">Madrid </span>
      </h1>
      <div className="row">
        <div className="col-3 current-temp">
          <img
            className="icon-weather"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          <span className="number">28</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3 weather-data">
          <ul>
            <li> Precipitation: 8% </li>
            <li> Humidity: 50% </li>
            <li> Wind: 8 Km/h </li>
          </ul>
        </div>

        <div className="col-6 date-info">
          <ul>
            <li className="right-title">Weather</li>
            <li className="weekday">Sunday, 16:00</li>
            <li className="img-description"> Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
