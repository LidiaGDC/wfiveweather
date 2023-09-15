import React from "react";
import CorrectedDate from "./CorrectedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>
        {" "}
        Results for <span className="city-picked"> {props.data.city} </span>
      </h1>
      <div className="row">
        <div className="col-3 current-temp">
          <img
            className="icon-weather"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          <span className="number">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3 weather-data">
          <ul>
            <li> Humidity: {props.data.humidity} % </li>
            <li> Wind: {props.data.wind} Km/h </li>
          </ul>
        </div>

        <div className="col-6 date-info">
          <ul>
            <li className="right-title"> Weather </li>
            <li className="weekday ">
              {" "}
              <CorrectedDate date={props.data.date} />
            </li>
            <li className="img-description text-capitalize">
              {" "}
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
