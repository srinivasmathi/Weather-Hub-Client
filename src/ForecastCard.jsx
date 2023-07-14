import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function ForecastCard(props){

    const data = props.data;

    return (
        <div className="forecast-card blur-background">
            <hr className="blur-background"/>
            <p className="card-heading">{data.datetime}</p>
            <hr className="blur-background"/>
            <img src={data.iconURL} alt="weather icon"></img>
            <p>{data.temperature + "°C"}</p>
            <p>{data.description}</p>
            <p>feels like {data.feelsLike + "°C"}</p>
            <hr className="blur-background"/>
        </div>
    );
}