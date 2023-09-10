import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city name..." />
        <input type="submit" value="Search" />
      </form>

      <p> Results for Madrid</p>
      <div className="row">
        <div className="col-2">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          28 °C
        </div>
        <div className="col-2">
          <ul>
            <li> Precipitation: 8% </li>
            <li> Humidity: 50% </li>
            <li> Wind: 8 Km/h </li>
          </ul>
        </div>

        <div className="col-8">
          <ul>
            <li>Weather</li>
            <li>Sunday, 16:00</li>
            <li> Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
