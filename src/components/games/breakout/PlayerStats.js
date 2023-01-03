export default function PlayerStats(ctx, player, currentUser, canvas) {
    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Name: ${currentUser}`, 20, 30)

    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Level: ${player.level}`, 210, 30)

    ctx.font = "20px Arial"
    ctx.FillStyle = "red"
    let gap = 0
    for (let i = 0; i < player.lives; i++) {
        ctx.fillText("❤️", canvas.width / 2 + gap, 30)
        gap += 30
    }

    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30)
}