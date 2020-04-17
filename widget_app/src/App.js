import React from 'react';
import NavBar from "./component/NavBar"
import Clock from "./component/Clock"
import Weather from "./component/Weather"
import Home from "./component/Home"
import {Route, Switch} from "react-router-dom"
import weatherProvider from "./provider/weatherProvider"

import './App.css';

function App() {
  return (
<div>
 <NavBar/>

<Switch>

<Route exact path = {"/"}> 
<Home/> 
</Route>

<Route exact path = {"/weather"}>
<weatherProvider>
<Weather/>
</weatherProvider>
 
</Route>

<Route path = {"/clock"}> 
<Clock/>
</Route>

</Switch>
</div>
  
  );
}

export default App;
