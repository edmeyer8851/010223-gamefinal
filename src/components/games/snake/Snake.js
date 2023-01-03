import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants";
import data from "./data";
import PlayerStats from "./PlayerStats"

let {player} = data


const Snake = () => {

  const playerStatsRef = useRef()
  const canvasRef = useRef();

  const playerStatsCanvas = playerStatsRef.current
  // const ctx = playerStatsCanvas.getContext('2d');

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) => {
    const [x, y] = DIRECTIONS[keyCode];
    const isOppDirection = (x === -dir[0] || y === -dir[1])

    return !isOppDirection && setDir(DIRECTIONS[keyCode])
  }
  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      setScore(score + 10)
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const playerStatsContext = playerStatsRef.current.getContext("2d")
    playerStatsContext.clearRect(0, 0, window.innerWidth, window.innerHeight)
    if (playerStatsCanvas != undefined) PlayerStats(playerStatsContext, player, score, playerStatsCanvas)
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "black";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle= "white";
    snake.forEach(([x, y]) => context.fillRect(x, y, .9, .9));
    context.fillStyle = "black";
    context.fillRect(apple[0], apple[1], 1, 1);
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], .9, .9);
  }, [snake, apple, gameOver]);

  return (
    <div className="columnDiv" role="button" tabIndex="0" onKeyDown={e => { if(e.keyCode >= 37 && e.keyCode <= 40) {
      e.preventDefault()
      moveSnake(e)
    }}
    }>
      <canvas
        style={{ border: "1px solid black", backgroundColor: "black" }}
        ref={playerStatsRef}
        width={`${CANVAS_SIZE[0]}px`}
        height = "30px"
      >
        </canvas>
      <canvas 
        style={{backgroundColor: "white"}}
        width={`${CANVAS_SIZE[0]}px`}
        height = "2px"
      ></canvas>
      <canvas
        style={{ border: "1px solid black", backgroundColor: "black" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      
      <div className="gameUtilities">
        <div className="buttonsDiv">
          {gameOver && <h2 style={{height: "15px"}}>GAME OVER!</h2>}
          <h3 style={{height: "15px"}}>{gameOver ? `Final Score: ${score}` : ``}</h3>
          <div >
            <button className="gameButton" onClick={startGame}>Start Game</button>
          </div>
          <div>
            <button className="gameButton">Add To Favorites</button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Snake;
