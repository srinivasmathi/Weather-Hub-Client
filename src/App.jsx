import React,{useState,useEffect } from "react";
import Forecast from "./Forecast";
import LoadingPage from "./LoadingPage";
import Modal from "./Modal"
import Form from "./Form"
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer"
import Highlights from "./Highlights";

function App() {

  const [input, setInput] = useState("");
  const [cityname,setCity] = useState("chennai");
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState(null);
  const defaultCity = "chennai";
  //for modal portal
  const [isOpen,setIsOpen] = useState(false);

  function cityChangeHandler(event){
    setCity(input);
    setInput("");
  }

  function onInput(event){
    const value = event.target.value;
    setInput(value);
  }

  function setOpen(){
    setIsOpen(!isOpen);
  }

  useEffect(() => {

    const fetchData = async () => {
      try{
        setIsLoading(true);
        const response  = await fetch("http://localhost:4000/"+cityname);
        const json = await response.json();
        if(response.status != 200){
          throw "data not fetched";
        }
        setData(json);
        setIsLoading(false);
      }
      catch(error){
        console.log("error:"+error);
        setOpen();
        setIsLoading(false);
      }
    }
    fetchData();

  },[cityname]);

  useEffect(() => {

    if(data){
      setIsLoading(true);
      const thunderstorm = [
        "thunderstorm with light rain","thunderstorm with rain",
        "thunderstorm with heavy rain","light thunderstorm","thunderstorm","heavy thunderstorm","ragged thunderstorm",
        "thunderstorm with light drizzle","thunderstorm with drizzle","thunderstorm with heavy drizzle"
      ]
      
      const drizzle = [
        "intensity drizzle","drizzle","heavy intensity drizzle","light intensity drizzle rain","drizzle rain","heavy intensity drizzle rain",
        "shower rain and drizzle","heavy shower rain and drizzle","shower drizzle"
      ]
      
      const rain =[
        "light rain","moderate rain","heavy intensity rain","very heavy rain","extreme rain","freezing rain","light intensity shower rain",
        "shower rain","heavy intensity shower rain","ragged shower rain"
      ]
      
      const snow = [
        "light snow","snow","heavy snow","sleet","light shower sleet","shower sleet",
        "light rain and snow","rain and snow","light shower snow","shower snow","heavy shower snow"
      ]
      
      const mist = [
        "mist","Smoke","haze","sand/ dust whirls","fog","sand","dust","volcanic ash","squalls","tornado"
      ]
      
      const clouds = [
        "few clouds","scattered clouds","broken clouds","overcast clouds"
      ]
      
      let img_description = data[0].description;
      
      if(img_description != null)
      {
        //console.log(img_description)
        let element = document.querySelector("body")

        element.style.backgroundPosition = "center";
        element.style.backgroundSize = "cover";

        if(img_description === "clear sky"){
          element.style.backgroundImage = "url(./images/sunny.jpg)";
        }else if (clouds.includes(img_description)) {
          element.style.backgroundImage = "url(./images/cloudy.jpg)";
        }else if (thunderstorm.includes(img_description) || drizzle.includes(img_description) || rain.includes(img_description)){
          element.style.backgroundImage = "url(./images/rainy.jpg)";
        }else if (snow.includes(img_description)){
          element.style.backgroundImage = "url(./images/cold.jpg)";
        }else{
          element.style.backgroundImage = "url(./images/mist.jpg)";
        }
      }
      else{
        console.log("no element exist with that Tag!");
      }
      setIsLoading(false);
    }

  },[data])

  return (
    <div>
    {isLoading || !data ?
      <LoadingPage /> :
      <div className="main">
        <div className="header">
        <h1>Weather Hub</h1>
        <Form onInput={onInput} cityChangeHandler = {cityChangeHandler} input={input} />
        </div>
        <div className="weather-card-container"><CurrentWeather data={data[0]} /></div>
        <Highlights data={data[0]}/>
        <Forecast forecastData = {data[1]}/>
        <Footer />
      </div>
    }
    <Modal isOpen={isOpen} onClose={setOpen}/>
    </div>
  );
}

export default App;
