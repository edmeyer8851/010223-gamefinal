import React from "react";
import './Styles.css';
import { Divider, Grid, Header } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'




function Home({games}) {

  const allGames = games.map (game => {
    return game
  })

  const selectedArrays = games.sort(() => Math.random() - 0.5).slice(0,5);


    return (
      <div className = "App">

        <div id="instructions">
        <Header as='h2' color = 'black' textAlign = 'center'>Games</Header>
          <Grid stackable container>
            <Divider hidden />
            <Grid.Row columns="two">
              <Grid.Column >
                <Header as="h3" textAlign="center">Snake</Header>
                <img id="snakePreviewImg" src={process.env.PUBLIC_URL + 'images/snakeImage.png'} onClick={() => window.location.href = 'http://localhost:3000/snakegame'}/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" textAlign="center">Breakout</Header>
                <img id="breakoutPreviewImg" src={process.env.PUBLIC_URL + 'images/breakoutImage.png'} onClick={() => window.location.href = 'http://localhost:3000/breakout'}/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
          <h3 id="instructions">Click a game to start playing!</h3>
        </div>
        <Grid stackable container>
          <Divider hidden />
          <Grid.Row columns="two">
              <Grid.Column>
                <Header size="huge" as="h1" style= {{textAlign: 'center'}}>
                  Snake Reviews 
                </Header>
                <div className="ui relaxed divided list">
                  {selectedArrays.map((game) => {
                            if (game.gamename === "snakegame") {
                                return <div className = "item" key = {game.id}><i className = "large github middle aligned icon"></i>{game.gamereview} </div>
                            }
                        })}
              
                </div>
                
              </Grid.Column>
              <Grid.Column>
              <Header size="huge" as="h1" style= {{textAlign: 'center'}}>
                  Breakout Reviews 
                </Header>
                <div className="ui relaxed divided list">
                  {selectedArrays.map((game) => {
                            if (game.gamename === "breakout") {
                                return <div className = "item" key = {game.id}><i className = "large github middle aligned icon"></i>{game.gamereview} </div>
                            }
                        })}
              
                </div>
                
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    )
}

export default Home;
