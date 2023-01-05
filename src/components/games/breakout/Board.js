import React, { useState, useEffect, useRef } from 'react'
import { BallMovement } from "./BallMovement"
import data from "./data"
import Paddle from './Paddle'
import WallCollision from './WallCollision'
import Brick from './Brick'
import BrickCollision from './BrickCollision'
import PaddleHit from './PaddleHit'
import PlayerStats from './PlayerStats'
import AllBroken from './AllBroken'

let { ballObj, paddleProps, player, brickObj } = data;
let bricks = []
let gameStartedBool = false

const Board = ({ currentUser }) => {

    const [gameStarted, setGameStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)

    const startGame = () => {
        player.lives = 3;
        ballObj.x = 385
        ballObj.y = 200
        ballObj.dy = 5
        brickObj.y = 50
        ballObj.speed = 10
        player.level = 1
        bricks = []
        gameStartedBool = !gameStartedBool
        setGameStarted(gameStarted => !gameStarted)
        if (gameOver) setGameOver(!gameOver)
        player.score = 0
        setScore(0);
      };
    
    const canvasRef = useRef(null);       

    useEffect(() => {
        
        const render = () => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d');

            paddleProps.y = canvas.height - 40
            

            // assign bricks            
            let newBrickSet = Brick(player.level, bricks, canvas, brickObj)
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet
            }
                      
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bricks.map((brick) => {
                return brick.draw(ctx);
            })

            const submitScore = (currentUser) => {
                fetch(`${process.env.REACT_APP_API_URL}/breakOutHiscores`, {
                  method: 'POST',
                  headers: {"Content-Type": 'application/json',
                            "Accept": "application/json"
                          }, 
                  body: JSON.stringify({
                    user: currentUser,
                    userScore: player.score
                  })
                })
              }

            if (player.lives === 0 && gameStarted){
                ballObj.x = 385
                ballObj.y = 200
                ballObj.dy = 0
                ballObj.speed = 10
                setGameOver(true)
                gameStartedBool = !gameStartedBool
                setGameStarted(!gameStarted)
                submitScore(currentUser)
            }

            BallMovement(ctx, ballObj)

            if (AllBroken(bricks, player, canvas, ballObj)) {
                player.level++
                ballObj.speed += 2
                ballObj.x = 385
                ballObj.y = 200
                ballObj.dx = 0
                ballObj.dy = 5
                brickObj.y = 50
            }

            WallCollision(ballObj, canvas, player)

            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if (brickCollision.hit && !bricks[i].broke) {
                // console.log(brickCollision);
                if (brickCollision.axis === "X") {
                    ballObj.dx *= -1;
                    bricks[i].broke = true;
                } else if (brickCollision.axis === "Y") {
                    ballObj.dy *= -1;
                    bricks[i].broke = true;
                }
                player.score += 10
                setScore(player.score)
                }
            }

            Paddle(ctx, canvas, paddleProps)

            PaddleHit(ballObj, paddleProps)

            PlayerStats(ctx, player, currentUser, canvas)
        
            if(gameStartedBool) {
                requestAnimationFrame(render)
            }
        }

        render()
    
    }, [gameStarted, currentUser])

    return (
    <div className="columnDiv">
        <canvas 
            id="canvas" 
            position="relative"
            ref={canvasRef} 
            onMouseMove={e => {
                if ( e.clientX - e.target.offsetLeft <= paddleProps.width / 2 || e.clientX - e.target.offsetLeft >= 800 - paddleProps.width / 2) return
                else {
                    paddleProps.x = e.clientX - e.target.offsetLeft - paddleProps.width / 2
                }
            }}
            height="500px" 
            width="800px"
        />
        <div className="gameUtilities">
            <div className="buttonsDiv">
                {gameOver && <h2 id="gameOver" style={{height: "15px"}}>GAME OVER!</h2>}
                <h3 id="finalScore" style={{height: "15px"}}>{gameOver ? `Final Score: ${score}` : ``}</h3>
                <div >
                    <button className="gameButton" onClick={startGame}>Start Game</button>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Board
