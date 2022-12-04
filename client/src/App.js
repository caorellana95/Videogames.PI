import './App.css';
import Sobre from './components/Sobre/Sobre';
import React from 'react';
import  Home  from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
// import NavBar from './components/NavBar/NavBar';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={ Home } />
      <Route exact path='/sobre' component={Sobre} />
      </Switch>
      <h1>Henry Videogames</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
