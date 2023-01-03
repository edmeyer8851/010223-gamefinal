export default function WallCollision(ballObj, canvas, player) {
    
    if (ballObj.y + ballObj.rad >= canvas.height){
        player.lives--
        ballObj.x = 385
        ballObj.y = 200
        ballObj.dx = 0
        ballObj.dy = 5
    }

    if (ballObj.y - ballObj.rad <= 0 ){
        ballObj.dy *= -1
    }
    if (ballObj.x - ballObj.rad <= 0 || ballObj.x + ballObj.rad >= canvas.width){
        ballObj.dx *= -1
    }
}