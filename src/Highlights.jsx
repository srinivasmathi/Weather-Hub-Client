import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faEyeSlash, faTemperatureHigh, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons";

export default function Highlights({data}){
    return(
        <div className="highlights-main">
            <h3>Todays's Highlights</h3>
            <div className="highlights-container">
                <div className="highlight  blur-background">
                    <p>Wind Speed <FontAwesomeIcon icon={faWind} style={{color: "#ffffff",}} /></p>
                    <p>{data.windSpeed} m/s</p>
                </div>
                <div className="highlight blur-background">
                    <p>Visibility <FontAwesomeIcon icon={faEyeSlash} style={{color: "#ffffff",}} /></p>
                    <p>{data.visibility} m</p>
                </div>
                <div className="highlight blur-background">
                    <p>High <FontAwesomeIcon icon={faTemperatureHigh} style={{color: "#ffffff",}} /></p>
                    <p>{data.highTemp}°C</p>
                </div>
                <div className="highlight blur-background">
                    <p>Low <FontAwesomeIcon icon={faTemperatureLow} style={{color: "#ffffff",}} /></p>
                    <p>{data.lowTemp}°C</p>
                </div>
                <div className="highlight blur-background">
                    <p>Humidity <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff",}} /></p>
                    <p>{data.humidity} %</p>
                </div>
                <div className="highlight blur-background">
                    <p>Pressure</p>
                    <p>{data.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
}