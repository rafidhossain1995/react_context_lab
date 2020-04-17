import React, {useContext} from "react"
import {weatherContext} from "../provider/weatherProvider"
const Weather = ()=>{
    const {getWeatherInfo} = useContext(weatherContext)
    
    
    return(
        <div>
            <h3> weather{getWeatherInfo}</h3>
        </div>
    )
}
export default Weather