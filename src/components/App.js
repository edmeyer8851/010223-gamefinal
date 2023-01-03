import React, {useState, useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar"
import SnakeGame from "./SnakeGame"
import BreakoutGame from "./BreakoutGame"
import Home from "./Home"
import Hiscores from "./Hiscores"
import './Styles.css'
import Login from "./Login"
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [reviews, setReviews] = useState ([])
  const [currentUser, setCurrentUser] = useState("");
  const [userForm, setUserForm] = useState("")

  useEffect (() => {
    fetch ("http://localhost:6001/reviews")
      .then (resp => resp.json())
      .then (setReviews)

    fetch ("http://localhost:6001/currentUser")
      .then (resp => resp.json())
      .then (user => setCurrentUser(user[0].name))
  }, [])

  const addNewReview = (newReview) => {
    setReviews([...reviews, newReview])
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const requestObj = {
      "name" : userForm,
    }
    
    fetch ("http://localhost:6001/currentUser/1",{
        method:"PATCH",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify (requestObj)
       })
       .then(res => {
      setUserForm("")
      window.location = 'http://localhost:3000'
    })
  }

  const logOut = () => {
    fetch ("http://localhost:6001/currentUser/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
              "name" : "",
            })
    })
      .then(() => setCurrentUser(""))
  }

  return (
   <BrowserRouter>
    <div>
      <h3 id="site-title"> Retro Games </h3>
      <NavBar currentUser={currentUser} logOut={logOut}/> 
    </div>
    <div> 
      <Switch> 
        <Route path = "/snakegame">
          <SnakeGame currentUser={currentUser} reviews={reviews} addNewReview={addNewReview}/>
        </Route>
        <Route path = "/breakout">
          <BreakoutGame currentUser={currentUser} reviews={reviews} addNewReview={addNewReview}/>
        </Route>
        <Route path = "/hiscores">
          <Hiscores />
        </Route>
        <Route path = "/login">
          <Login userForm={userForm} setUserForm={setUserForm} handleLogin={handleLogin}/>
        </Route>
        <Route path = "/"> 
          <Home reviews={reviews} />
        </Route>
      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
