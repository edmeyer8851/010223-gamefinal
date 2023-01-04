import React, { useEffect, useState } from "react";
import './Styles.css';
import './Styles.css';
import { Divider, Grid, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

// when building hiscores, list as anonymous if the hiscore was achieved by a player not logged in

function Highscores() {
  
  const [snakeHiscores, setSnakeHiscores] = useState([])
  const [breakoutHiscores, setBreakoutHiscores] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/snakeHiscores')
    .then(res => res.json())
    .then(hiscores => setSnakeHiscores(hiscores))

    fetch('http://localhost:6001/breakoutHiscores')
    .then(res => res.json())
    .then(hiscores => setBreakoutHiscores(hiscores))
  }, [])

  const getTopTenScores = (hiscores) => {
    return hiscores.sort((a, b) => b.userScore - a.userScore).slice(0, 10)
  }

  const snakeScoresToDisplay = getTopTenScores(snakeHiscores)
  const breakoutScoresToDisplay = getTopTenScores(breakoutHiscores)

  const columnDefs = [
    {field: "Rank", width: 75},
    {field: 'User', width: 100},
    {field: 'Score', width: 100}
  ]

  const SnakeRowData = snakeScoresToDisplay.map((score, index)  => {
    return {
      Rank: index + 1,
      User: score.user === "" ? "Guest" : score.user,
      Score: score.userScore
    }
  })

  const BreakoutRowData = breakoutScoresToDisplay.map((score, index) => {
    return {
      Rank: index + 1,
      User: score.user === "" ? "Guest" : score.user,
      Score: score.userScore
    }
  })
  
  return (
    <div className = "center"> 
      <br/>
      <br/>
        <Header size="huge" as="h1" style= {{textAlign: 'center'}}>Hiscores</Header>
        <Grid stackable container>
        <Divider hidden />
        <Grid.Row centered columns="two">
            <Grid.Column id="hiscoreColumn">
              <Header size="large" as="h1" style= {{textAlign: 'center'}}>Snake Hiscores</Header>
              <br/>
              <div className="center aligned ui grid">
                <div className='ag-theme-alpine-dark' style={{height: 474, width: 305}}>
                  <AgGridReact
                    rowData={SnakeRowData}
                    columnDefs={columnDefs}
                  />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column id="hiscoreColumn">
              <Header size="large" as="h1" style= {{textAlign: 'center'}}>Breakout Hiscores</Header>
              <br/>
              <div className="center aligned ui grid">
                <div className='ag-theme-alpine-dark' style={{height: 474, width: 305}}>
                  <AgGridReact
                    rowData={BreakoutRowData}
                    columnDefs={columnDefs}
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

export default Highscores;
