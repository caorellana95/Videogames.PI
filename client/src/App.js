import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import VideogameDetail from '/components/VideogameDetail/VideogameDetail';


function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/videogames" component={Home}> </Route>
        <Route exact path="/videogame/:idVideogame" component={VideogameDetail}></Route>
        <Route exact path="/create" component={CreateVideogame}></Route>
      </Switch>
    </div>
  );
}

export default App;
