import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import VideogameDetail from './components/VideogameDetail/VideogameDetail'



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      {/* <Switch> */}
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}> </Route>
        <Route exact path="/videogame/:id" component={VideogameDetail}></Route>
        <Route exact path="/create" component={CreateVideogame}></Route>
      {/* </Switch> */}
       {/* <h1>Henry Videogames</h1> */}
    </div>
   </BrowserRouter>
  );
}

export default App;


