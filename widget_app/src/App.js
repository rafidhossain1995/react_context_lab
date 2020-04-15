import React from 'react';
import NavBar from "./component/NavBar"
import Clock from "./component/Clock"
import Weather from "./component/Weather"
import Home from "./component/Home"
import {Route, Switch} from "react-router-dom"

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
 <Weather/>
</Route>

<Route path = {"/clock"}> 
<Clock/>
</Route>

</Switch>
</div>
  
  );
}

export default App;
