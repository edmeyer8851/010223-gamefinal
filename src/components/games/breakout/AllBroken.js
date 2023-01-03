import data from './data'

export default function AllBroken(bricks, player, ballObj){
    let total = 0
    let { brickObj } = data
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true){
            total++
        }
    }
    if (total === bricks.length) {
        return true
    } 
}