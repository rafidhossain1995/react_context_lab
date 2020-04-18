import React, {useContext} from "react"
import {WeatherContext} from "../provider/WeatherProvider"

const Weather = ()=>{
    const {getWeatherInfo, weather, userCity}  = useContext(WeatherContext)
    
  
    const selectCity = ()=>{
        if(userCity.name === undefined){
                return
        }
        return(
            <div className = "weather">
                <p>{userCity.name}</p>
                <p>Country: {userCity.country} </p>
            </div>
        )
    }

    const getDays = weather.map((temp, forecast)=>{
        if(forecast< 5){
            const changeToFarenheit = (k) =>{
                return Math.round(((k-273.15) * 9/5 + 32))
            }
            return(
                <ul key = {forecast}>
                    <li>Date: {temp.dt_txt}</li>
                    <li>Current Weather: {temp.weather[0].description}</li>
                    <li>Current Temp: {changeToFarenheit(temp.main.temp)} °F</li>
                    <li>High: {changeToFarenheit(temp.main.temp_max)} °F</li>
                    <li>Low: {changeToFarenheit(temp.main.temp_min)} °F</li>
                </ul>
            )
        }
    })
    
    return(
        <div classname = "app">
        <div className = "city">
            <h3>{selectCity}</h3>
        </div>
        <button onClick = {getWeatherInfo}>Get Weather</button>
        <h3>Weather {getDays}</h3>

        </div>
    )
}
export default Weather