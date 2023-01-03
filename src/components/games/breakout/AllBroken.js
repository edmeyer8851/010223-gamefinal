export default function AllBroken(bricks){
    let total = 0
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true){
            total++
        }
    }
    if (total === bricks.length) {
        return true
    } 
}