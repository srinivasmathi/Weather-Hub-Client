import React from "react";
import ForecastCard from "./ForecastCard";

export default function Forecast(props){

    const data = props.forecastData;

    return(
        <div class="forecast-main">
            <h3>Three Hour Forecast</h3>
            <div className="forecast-container">
                {data.map((item,index) => {
                    return <ForecastCard key={index} data={item}/>;
                })}
            </div>
        </div>
    );
}