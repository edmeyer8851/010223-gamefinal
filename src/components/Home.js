import React from "react";
import styled from 'styled-components';
import './Styles.css';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'




function Home({games}) {

  const allGames = games.map (game => {
    return game
  })

  console.log("allGames", allGames)

  const selectedArrays = games.sort(() => Math.random() - 0.5).slice(0,5);

  

    // <Grid textAlign = 'center'  verticalAlign = 'middle'>
    //   <Header as='h2' color = 'teal'  textAlign = 'center'><br /> Home </Header>
    //   <Grid columns = 'equal'>
    //     <Grid.Row columns = 'equal'>
    //       <Grid.Column>
    //         <div className = "center">
    //         <h1> Snake-Game</h1>
    //         <ul>
    //         {selectedArrays.map((game) => {
    //           if (game.gamename === 'snakegame') {
    //             return <li key = {game.id}>{game.gamereview}</li>
    //           }
    //         })}
    //         </ul>
    //         </div>
    //       </Grid.Column>
    //       <Grid.Column>
    //         <div className = "center">
    //         <h1> Breakout </h1>
    //         <ul>
    //         {selectedArrays.map((game) => {
    //           if (game.gamename === 'breakout') {
    //             return <li key = {game.id}>{game.gamereview}</li>
    //           }
    //         })}
    //         </ul>
    //         </div>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Grid>

    return (
      <div className = "App">
        <Grid stackable container>
        <Divider hidden />
        <Grid.Row columns="two">
            <Grid.Column>
              <Header size="huge" as="h1" style= {{textAlign: 'center'}}>
                Snakegame 
              </Header>
              <div class="ui relaxed divided list">
                {selectedArrays.map((game) => {
                          if (game.gamename === "snakegame") {
                              return <div class = "item" key = {game.id}><i class = "large github middle aligned icon"></i>{game.gamereview} </div>
                          }
                      })}
            
              </div>
              
            </Grid.Column>
            <Grid.Column>
            <Header size="huge" as="h1" style= {{textAlign: 'center'}}>
                Breakout Game 
              </Header>
              <div class="ui relaxed divided list">
                {selectedArrays.map((game) => {
                          if (game.gamename === "breakout") {
                              return <div class = "item" key = {game.id}><i class = "large github middle aligned icon"></i>{game.gamereview} </div>
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
