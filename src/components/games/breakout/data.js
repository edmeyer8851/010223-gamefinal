let data = {
    ballObj: {
        x: 385,
        y: 200,
        dx: 0,
        dy: 0,
        rad: 15,
        speed: 10,
    },
    brickObj: {
        x: 10,
        y: 50,
        width: 800 / 10 -1,
        height: 20,
        density: 2,
        colors: ["blue", "lightblue"]
    },
    player: {
        name: "Eddie",
        lives: 3,
        score: 0,
        level: 1,
    },
    paddleProps: {
        height: 20,
        width: 150,
        x: 325,
        color: "white",
    }
};

export default data;