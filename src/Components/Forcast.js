import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import api from "../api/config";
import ReactAnimatedWeather from "react-animated-weather";
import Error from "./Error";

export default function Forecast() {
  let [forecast, setForecast] = useState({});
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let[ locationAccess, setlocationAccess]=useState("allowed")


  let [iconname, setIconName] = useState("CLEAR_DAY");

  const defaults = {
    icon: iconname,
    color: "goldenrod",
    size: 100,
    animate: true,
  };

  function getCityValue() {
    let userinput = document.getElementById("cityname").value;
    if (userinput !== "") {
      setCity(userinput);
    } else {
      alert("please enter city name");
    }
  }
  useEffect(() => {
    async function getData() {
      if (city !== "") {
       const response = await fetch(`${api.apiname}q=${city}${api.key}`);
       if (response.status !== 404) {
        let data = await response.json();
        console.log(data);
        setForecast(data);
        setError(false);
        if (data.weather[0].main === "Clear") {
          setIconName("CLEAR_DAY");
        } else if (data.weather[0].main === "Snow") {
          setIconName("SNOW");
        } else if (
          data.weather[0].main === "Rain" ||
          data.weather[0].main === "Drizzle" ||
          data.weather[0].main === "Thunderstorm"
        ) {
          setIconName("RAIN");
        } else if (data.weather[0].main === "Smoke") {
          setIconName("FOG");
        } else if (data.weather[0].main === "Clouds") {
          setIconName("CLOUDY");
        }
      } else {
        setError(true);
      }
      } 
      
      
      
      
      
      else {

        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
            async(position)=>{
              const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&id=524901&&units=metric&appid=3e43c3d8b684e8223c23a336c725a765`)
                if (response.status !== 404) {
                  let data = await response.json();
                  console.log(data);
                  setForecast(data);
                  setError(false);
                  if (data.weather[0].main === "Clear") {
                    setIconName("CLEAR_DAY");
                  } else if (data.weather[0].main === "Snow") {
                    setIconName("SNOW");
                  } else if (
                    data.weather[0].main === "Rain" ||
                    data.weather[0].main === "Drizzle" ||
                    data.weather[0].main === "Thunderstorm"
                  ) {
                    setIconName("RAIN");
                  } else if (data.weather[0].main === "Smoke") {
                    setIconName("FOG");
                  } else if (data.weather[0].main === "Clouds") {
                    setIconName("CLOUDY");
                  }
                } else {
                  setError(true);
                }
          
            },
            (error)=>{
              console.log(error);
            setlocationAccess("denied")
            }

          )

        }
      else{
   
        setError(true)
      }
       
        
      }
    
    }
    getData();

  }, [city]);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="parent">
      {locationAccess==="allowed"?
      <>
            <React.Fragment>
        <div className="container">
          <div className="city">
            {error === false ? (
              <>
                <div className="title">
                  <h2>{forecast.name}</h2>
                  <h3>{forecast.sys?.country}</h3>
                </div>
              </>
            ) : (
              <>
                <div className="title2">
                  <h2> 🚫 An error occurred </h2>
                </div>
              </>
            )}

            <div className="mb-icon">
              <p></p>
            </div>

            {error === false ? (
              <>
                <div className="date-time">
                  <div className="dmy">
                    <div id="txt"></div>
                    <div className="current-time">
                      <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                    </div>
                    <div className="current-date">{currentDate}</div>
                  </div>

                  <div className="temperature">
                    <p>
                      {Math.round(forecast.main?.temp)}°<span>C</span>
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="forecast">
            {error === false ? (
              <>
                <div className="forecast-icon">
                  <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                  />
                </div>
              </>
            ) : null}
            <div>
              {/* <ReactAnimatedWeather
                    icon={props.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                  /> */}
            </div>
            <div className="today-weather">
              {error === false ? (
                <>
                  <h3>{forecast.weather?.[0].main}</h3>
                </>
              ) : (
                <p className="search__error">
                  your search is not found try again
                </p>
              )}

              <div className="search-box">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search any city"
                  id="cityname"
                />
                <div className="img-box" onClick={getCityValue}>
                  <img
                    src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                    alt="searchicon"
                  />
                </div>
              </div>
              {error === false ? (
                <>
                  <ul>
                    <div>
                      <li className="cityHead">
                        <p>{forecast.weather?.[0].description}</p>
                        <img
                          className="temp"
                          src={`https://openweathermap.org/img/wn/${forecast.weather?.[0].icon}.png`}
                          alt="weather"
                        />
                      </li>
                      <li>
                        Temperature{" "}
                        <span className="temp">
                          {Math.round(forecast.main?.temp)}°c
                        </span>
                      </li>
                      <li>
                        Humidity{" "}
                        <span className="temp">{forecast.main?.humidity}%</span>
                      </li>
                      <li>
                        Visibility{" "}
                        <span className="temp">
                          {Math.round(forecast?.visibility * 0.0006213)} mi
                        </span>
                      </li>
                      <li>
                        Wind Speed{" "}
                        <span className="temp">
                          {Math.round(forecast.wind?.speed)} km/h
                        </span>
                      </li>
                    </div>
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>

      </>:
      <>
      <Error/>
      </>
      }
    </div>
  );
}
