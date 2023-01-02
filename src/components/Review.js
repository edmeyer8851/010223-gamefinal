import React, {useEffect, useState} from "react";
import { Form, Button, InputGroup , Container, Row, Col } from "react-bootstrap";
import './Styles.css';



function Review ({games, addNewGame}) { 

    const [gameName, setGameName] = useState("");
    const [gameReview, setGameReview] = useState("");
    const [gameLike, setGameLike] = useState(false)
    const [gameType, setGameType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGames = {
            gamename : gameName,
            gamereview : gameReview, 
            gamelike : gameLike,
            gametype : gameType,
        }

        fetch ("http://localhost:6001/games", {
            method : "POST",
            headers : {
                "Content-Type" : "application/JSON",
            },
            body: JSON.stringify (newGames)
        })
            .then (resp => resp.json())
            .then (myGame => addNewGame(myGame))
    }

    return (
       
         
        
        <div> 
          
            <Container fluid>
            <Form onSubmit = {handleSubmit} >
            <InputGroup >
                <Form.Check 
                 type="switch"
                 id="custom-switch"
                 label="Check if you like the game"
                 value = {gameLike}
                 onChange = {(e) => setGameLike(e.target.checked)}
                /><br />
                {/* <Form.Control aria-label = "Checkbox" /> */}
            </InputGroup>
            <Form.Group>
                <Form.Label> Select Game </Form.Label>
                <Form.Control
                as="select"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                >
                <option value = ""> Select Game </option>
                <option value ="snakegame"> Snakegame</option>
                <option value ="breakout"> Breakout</option>
                </Form.Control> <br />
            </Form.Group>
            <Form.Group> 
                <Form.Label> Add Review </Form.Label>
                <Form.Control 
                type = "text"
                placeholder = "Add a Game Review" 
                value = {gameReview}
                onChange = {(e) => setGameReview(e.target.value)}
                /> <br />
            </Form.Group>
                <Button variant = "primary" type = "submit"> 
                submit
                </Button>
            </Form>
            </Container>
        </div>


       
    
    )
}

export default Review

// {/*<h1> </h1>
// <form> 
//     <input type = "text" name = "gameName" placeholder = "Game Name" value = {gameName} onChange = {(e) => setGameName(e.target.value)} />
//     <input type = "text" name = "gameReview" placeholder = "Game Review" value = {gameReview} onChange = {(e) => setGameReview(e.target.value)} />
//     <input type="number" name="gameLike" step="0.01" placeholder="gameLike" value={gameLike} onChange = {(e) => setGameLike(e.target.value)}/>
//     <button type="submit">Add Plant</button>
// </form>*/}