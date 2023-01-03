import React from "react";
import Review from "./Review"
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import Breakout from "./games/breakout/Breakout"


function BreakoutGame ({ currentUser, reviews, addNewReview }) { 
    
    let likeCount = reviews.filter(review => (review.game === "breakout" && review.liked)).length

    return (
        <div>
            <Grid textAlign = 'center' style ={{height: '100vh'}} verticalAlign = 'middle'>
                <Header as='h2' color = 'green' textAlign = 'center'><br />  Breakout </Header>
                <Container> 
                    <Breakout currentUser={currentUser}/>
                    <Header as='h3'>
                        <Icon name='thumbs up outline' />
                        <Header.Content> {likeCount} users like Breakout! <br/> </Header.Content>
                    </Header> 
                    <br />
                    <h3> Add Game Review </h3> 
                    <br />
                    <Review addNewReview={addNewReview} />
                </Container>
            </Grid>
        </div> 

    )
}

export default BreakoutGame

