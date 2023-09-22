import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "aabb459045170c682b91ab6157b00f6a";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="09d" size={35} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-tempmax">24°</span>
            <span className="WeatherForecast-tempmin">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
