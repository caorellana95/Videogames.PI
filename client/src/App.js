import './App.css';
import React from 'react';
import Videogame from "./components/Videogame/Videogame";
import VideogamesDetail from "./components/VideogamesDetail/VideogamesDetail";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path='/home' component={Home} />
      <Route path='/videogame' component={Videogame} />
      <Route path='/home/id' component={VideogamesDetail} />
      </Switch>
      <h1>Henry Videogames</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
