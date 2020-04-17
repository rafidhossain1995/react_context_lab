import React, {createContext, useState} from "react"
import axios from "axios"
export const weatherContext = createContext()

const weatherProvider = (props)=>{
    const [weather, getWeather] = useState
    const [userCity, setUserCity] = useState

    const getWeatherInfo = async()=>{
        try{
            let res = await axios
            debugger
        }catch(err){
            console.log(err)
        }
    }
    return(
        <weatherContext.prover value = {getWeatherInfo}>
                {props.children}
        </weatherContext.prover>
    )
}

export default weatherProvider