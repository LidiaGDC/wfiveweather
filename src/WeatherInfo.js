import React from "react";
import CorrectedDate from "./CorrectedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>
        {" "}
        Results for <span className="city-picked"> {props.data.city} </span>
      </h1>
      <div className="row">
        <div className="col-2 ">
          <div className="float-left icon">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="col-2 current-temp">
          <span className="number">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3 weather-data">
          <ul>
            <li> Humidity: {props.data.humidity} % </li>
            <li> Wind: {props.data.wind} Km/h </li>
          </ul>
        </div>

        <div className="col-5 date-info">
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
