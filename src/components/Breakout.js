import React from "react";
import Review from "./Review"
import Enterscores from "./Enterscores"
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import Breakout from "./games/breakout/Breakout"


function Breakoutgame ({games, addNewGame, supscores, addNewScores }) { 
    let bgamelike = 0;
    games.map(game => {
        if ( game.gamename === "breakout" && game.gamelike === true) {
            bgamelike++;
        }
    })

   
    return (
        <div>
        
        <Grid textAlign = 'center' style ={{height: '100vh'}} verticalAlign = 'middle'>
        <Header as='h2' color = 'green' textAlign = 'center'>
           <br />  Breakout
        </Header>
        <Container> 
        <Breakout />
        <Header as='h3'>
            <Icon name='thumbs up outline' />
            <Header.Content> {bgamelike} users like Breakout! <br /> </Header.Content>
        </Header> <br />
        <Enterscores /> <br />
        
        <Review games = {games} addNewGame = {addNewGame} />
        </Container>
         </Grid>
         
        </div> 

    )
}

export default Breakoutgame

