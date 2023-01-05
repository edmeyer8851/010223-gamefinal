import React, {useState} from "react";
import { Form, Button, InputGroup , Container } from "react-bootstrap";
import './Styles.css';



function Review ({ addNewReview }) { 

    const [gameName, setGameName] = useState("");
    const [gameReview, setGameReview] = useState("");
    const [gameLiked, setGameLiked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            game: gameName,
            review: gameReview, 
            liked: gameLiked
        }

        fetch (`${process.env.REACT_APP_API_URL}/reviews`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/JSON",
            },
            body: JSON.stringify (newReview)
        })
            .then (resp => resp.json())
            .then (newReview => {
                addNewReview(newReview)
                setGameName("")
                setGameReview("")
                if (gameLiked){
                    setGameLiked(false)
                }
            })
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
                 value = {gameLiked}
                 onChange = {(e) => setGameLiked(e.target.checked)}
                /><br />
            </InputGroup>
            <Form.Group>
                <Form.Label> Select Game </Form.Label>
                <Form.Control
                as="select"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                >
                <option value = ""> Select Game </option>
                <option value ="snake"> Snake</option>
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