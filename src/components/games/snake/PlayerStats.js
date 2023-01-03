export default function PlayerStats(ctx, player, score, canvas) {
    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Name: ${player.name}`, 20, 22)

    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${score}`, canvas.width - 140, 22)
}