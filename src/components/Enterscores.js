import React, {useEffect, useState} from "react";
import { Form, Button, InputGroup } from "react-bootstrap";


function Enterscores ({supscores, addNewScores}) { 

    const [scoreGames, setScoreGames] = useState ("")
    const [scores, setScores] = useState (0.0)

    const handleGame = (e) => {
        e.preventDefault();

        const newScores = {
            scoreGames : scoreGames,
            scores : scores
        }

        fetch ("http://localhost:6001/games/games", {
            method : "POST",
            headers : {
                "Content-Type" : "application/JSON",
            },
            body: JSON.stringify (newScores)
        })
            .then (resp => resp.json())
            .then (myScores => addNewScores(myScores))
    }

    return (
        <div> 
         
        
        <div> 
            <h3> Add Game Review </h3> <br />
            <Form onSubmit = {handleGame} className = "w-50">
       
            <Form.Group>
                <Form.Label> Select Game </Form.Label>
                <Form.Control
                as="select"
                value={scoreGames.scoreGames}
                onChange={(e) => setScoreGames(e.target.value)}
                >
                <option value = ""> Select Game </option>
                <option value ="snakegame"> Snakegame</option>
                <option value ="breakout"> Breakout</option>
                </Form.Control> <br />
            </Form.Group>
            <Form.Group> 
                <Form.Label> Enter Score </Form.Label>
                <Form.Control 
                type = "value"
                placeholder = "Add a Game Review" 
                value = {scores}
                onChange = {(e) => setScores(e.target.value)}
                /> <br />
            </Form.Group>
                <Button variant = "primary" type = "submit"> 
                submit
                </Button>
            </Form>
        </div>


        </div>
    
    )
}

export default Enterscores