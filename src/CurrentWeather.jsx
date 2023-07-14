import React from "react";

export default function CurrentWeather({data}){
    return(
    <div className="current-weather blur-background">
        <p className="cur-city-temp">{data.temperature + "°"}</p>
      <p className="cityName" >{data.cityName}</p>
      <img className="cur-weather-img" src={data.iconURL} alt="weather icon" />
      <p className="cur-time">{data.datetime}</p>
      <p class="weather-description">{data.description}</p>
    </div>
    );
}