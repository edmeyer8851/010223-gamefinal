import React, {useEffect, useState} from "react";
import Review from "./Review"
import Enterscores from "./Enterscores"
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, Container } from 'semantic-ui-react'
import Snake from "./games/snake/Snake"


function Snakegame ({games, addNewGame, supscores, addNewScores }) { 
    let sgamelike = 0;
    const snakegamelike = games.map(game => {
        if ( game.gamename === "snakegame" && game.gamelike === true) {
            sgamelike++;
        }
    
    })

    console.log("snakegamelike",sgamelike)
   
    return (
        <div>
        
        <Grid textAlign = 'center' style ={{height: '100vh'}} verticalAlign = 'middle'>
        <Header as='h2' color = 'green' textAlign = 'center'>
           <br />  Snake Game 
        </Header>
        <Container> 
        <Snake />
        <Header as='h3'>
            <Icon name='thumbs up outline' />
            <Header.Content> {sgamelike} users like Snake! <br /> </Header.Content>
        </Header> <br />
        {/* <Enterscores /> <br /> */}
        
        <Review games = {games} addNewGame = {addNewGame} />
        </Container>
         </Grid>
         
        </div> 

    )
}

export default Snakegame

