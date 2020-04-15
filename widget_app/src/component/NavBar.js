import React from "react" 
import {NavLink} from "react-router-dom"

const NavBar = () =>{
    return(
       <header>
           <NavLink className= "link"exact to ={"/"}>
               Home
           </NavLink>

           <NavLink className= "link"exact to ={"/weather"}>
               weather
           </NavLink>

           <NavLink className= "link"exact to ={"/clock"}>
               clock
           </NavLink>
       </header>
           



        
    )
}
export default NavBar