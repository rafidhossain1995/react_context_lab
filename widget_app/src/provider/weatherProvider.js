import React, {createContext, useState} from "react"
import axios from "axios"
export const WeatherContext = createContext()

const WeatherProvider = (props)=>{
    const [weather, getWeather] = useState()
    const [userCity, setUserCity] = useState()

    const getWeatherInfo = async()=>{
        try{
            let res = await axios ("http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=cac8bebe1d460614795313edbd88cb49")
            getWeather(res.data.list)
            setUserCity(res.data.city)
        }catch(err){
            console.log(err)
        }
    }

  

  
    // useEffect(()=>{
    //     getWeatherInfo()
    // }, [])
    
    return(
        <WeatherContext.provider value = {getWeatherInfo, weather, userCity}>
                {props.children}
        </WeatherContext.provider>
    )
}

export default WeatherProvider