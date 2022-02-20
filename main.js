import { draw_next_piece as draw_next } from "./pieces.js"

const gameBoard = document.getElementById("game-board")
const nextPiece = document.getElementById("next-piece")
let lastRenderTime = 0 
let gameOver = false
const GAME_SPEED = 10


function gameloop(currentTime) {
    window.requestAnimationFrame(gameloop)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / GAME_SPEED) return
    lastRenderTime = currentTime
    draw_next_piece()
}

window.requestAnimationFrame(gameloop)

function update() {
    console.log("update.")
}

function draw_next_piece() {
    nextPiece.innerHTML = ""
    draw_next(nextPiece)
}
