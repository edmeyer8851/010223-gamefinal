import React, {useState, useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";
import NavBar from "./NavBar"
import Snakegame from "./Snakegame"
import Breakout from "./Breakout"
import Home from "./Home"
import Hiscores from "./Hiscores"
import './Styles.css'
import Login from "./Login"
import 'semantic-ui-css/semantic.min.css'
// import PlantPage from "./PlantPage";

//Jan 3 version 

function App() {

  const [games, setGames] = useState ([])
  const [supscores, setNewScores] = useState ([])

  useEffect (() => {
    fetch ("http://localhost:6001/games")
    .then (resp => resp.json())
    .then (setGames)
  }, [])

  const addNewGame = (myGame) => {
    setGames([...games, myGame])
  }
  

  const addNewScores = (myScores) => {
    setNewScores([...supscores, myScores])
  }

  return (
   <BrowserRouter>
    <div>
      <h3> Retro Games </h3>
      <NavBar /> 
    </div>
    <div> 
      <Switch> 
        <Route path = "/snakegame">
          <Snakegame games = {games} addNewGame = {addNewGame} supscores = {supscores} addNewScores = {addNewScores} />
        </Route>
        <Route path = "/breakout">
          <Breakout />
        </Route>
        <Route path = "/hiscores">
          <Hiscores />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/"> 
          <Home games = {games} />
        </Route>

      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
