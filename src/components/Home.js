import React from "react";
import './Styles.css';
import { Divider, Grid, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function Home({reviews}) {

  return (
    <div className = "App">
      <div id="instructions">
      <Header as='h2' color = 'black' textAlign = 'center'>Games</Header>
        <Grid stackable container>
          <Divider hidden />
          <Grid.Row columns="two">
            <Grid.Column >
              <Header as="h3" textAlign="center">Snake</Header>
              <img id="snakePreviewImg" src={process.env.PUBLIC_URL + 'images/snakeImage.png'} alt="" onClick={() => window.location.href = 'http://localhost:3000/snakegame'}/>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" textAlign="center">Breakout</Header>
              <img id="breakoutPreviewImg" src={process.env.PUBLIC_URL + 'images/breakoutImage.png'} alt="" onClick={() => window.location.href = 'http://localhost:3000/breakout'}/>
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
                {reviews.map((review) => {
                    if (review.game === "snake") {
                        return <div className = "item" key = {review.id}><i className = "large github middle aligned icon"></i>{review.review} </div>
                    }
                    return null
                })}
              </div>
            </Grid.Column>
            <Grid.Column>
            <Header size="huge" as="h1" style= {{textAlign: 'center'}}>
                Breakout Reviews 
              </Header>
              <div className="ui relaxed divided list">
                {reviews.map((review) => {
                    if (review.game === "breakout") {
                        return <div className = "item" key = {review.id}><i className = "large github middle aligned icon"></i>{review.review} </div>
                    } 
                    return null
                  })}
              </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

export default Home;
