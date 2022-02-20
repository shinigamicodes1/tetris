const t = {x: 1, y: 1, x2: 2, y2: 2+1, x3: 1, y3:2+1, x4: 3, y4: 2+1}
const lright = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]
const lleft = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]
const z = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]
const s = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]
const block = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]
const long = [{x: 2, y: 1, x2: 2, y2: 2, x3: 1, y3:2, x4: 3, y4: 2}]

const tnext = {x: 3, y: 1+1, x2: 3, y2: 2+1, x3: 2, y3: 2+1, x4: 4, y4: 2+1}
const lrightnext = {x: 2, y: 3, x2: 3, y2: 3, x3: 3, y3: 2, x4: 3, y4: 1}
const lleftnext = {x: 2, y: 1, x2: 2, y2: 2, x3: 2, y3: 3, x4: 3, y4: 3}
const znext = {x: 2, y: 2, x2: 3, y2: 2, x3: 3, y3: 3, x4: 4, y4: 3}
const snext = {x: 2, y: 3, x2: 3, y2: 3, x3: 3, y3: 2, x4: 4, y4: 2}
const blocknext = {x: 2, y: 2, x2: 2, y2: 3, x3: 3, y3: 2, x4: 3, y4: 3}
const longnext = {x: 3, y: 1, x2: 3, y2: 2, x3: 3, y3: 3, x4: 3, y4: 4}
let nextPieceTypeCheck = "long"

export function draw_next_piece(nextPiece) {
    if (nextPieceTypeCheck == "t") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = tnext.y
        nextPieceTypeBlock.style.gridColumnStart = tnext.x
        nextPieceTypeBlock.classList.add("tblock")
        nextPieceTypeBlock2.style.gridRowStart = tnext.y2
        nextPieceTypeBlock2.style.gridColumnStart = tnext.x2
        nextPieceTypeBlock2.classList.add("tblock")   
        nextPieceTypeBlock3.style.gridRowStart = tnext.y3
        nextPieceTypeBlock3.style.gridColumnStart = tnext.x3
        nextPieceTypeBlock3.classList.add("tblock")
        nextPieceTypeBlock4.style.gridRowStart = tnext.y4
        nextPieceTypeBlock4.style.gridColumnStart = tnext.x4
        nextPieceTypeBlock4.classList.add("tblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "lright") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = lrightnext.y
        nextPieceTypeBlock.style.gridColumnStart = lrightnext.x
        nextPieceTypeBlock.classList.add("lrightblock")
        nextPieceTypeBlock2.style.gridRowStart = lrightnext.y2
        nextPieceTypeBlock2.style.gridColumnStart = lrightnext.x2
        nextPieceTypeBlock2.classList.add("lrightblock")   
        nextPieceTypeBlock3.style.gridRowStart = lrightnext.y3
        nextPieceTypeBlock3.style.gridColumnStart = lrightnext.x3
        nextPieceTypeBlock3.classList.add("lrightblock")
        nextPieceTypeBlock4.style.gridRowStart = lrightnext.y4
        nextPieceTypeBlock4.style.gridColumnStart = lrightnext.x4
        nextPieceTypeBlock4.classList.add("lrightblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "lleft") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = lleftnext.y
        nextPieceTypeBlock.style.gridColumnStart = lleftnext.x
        nextPieceTypeBlock.classList.add("lleftblock")
        nextPieceTypeBlock2.style.gridRowStart = lleftnext.y2
        nextPieceTypeBlock2.style.gridColumnStart = lleftnext.x2
        nextPieceTypeBlock2.classList.add("lleftblock")   
        nextPieceTypeBlock3.style.gridRowStart = lleftnext.y3
        nextPieceTypeBlock3.style.gridColumnStart = lleftnext.x3
        nextPieceTypeBlock3.classList.add("lleftblock")
        nextPieceTypeBlock4.style.gridRowStart = lleftnext.y4
        nextPieceTypeBlock4.style.gridColumnStart = lleftnext.x4
        nextPieceTypeBlock4.classList.add("lleftblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "z") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = znext.y
        nextPieceTypeBlock.style.gridColumnStart = znext.x
        nextPieceTypeBlock.classList.add("zblock")
        nextPieceTypeBlock2.style.gridRowStart = znext.y2
        nextPieceTypeBlock2.style.gridColumnStart = znext.x2
        nextPieceTypeBlock2.classList.add("zblock")   
        nextPieceTypeBlock3.style.gridRowStart = znext.y3
        nextPieceTypeBlock3.style.gridColumnStart = znext.x3
        nextPieceTypeBlock3.classList.add("zblock")
        nextPieceTypeBlock4.style.gridRowStart = znext.y4
        nextPieceTypeBlock4.style.gridColumnStart = znext.x4
        nextPieceTypeBlock4.classList.add("zblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "s") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = snext.y
        nextPieceTypeBlock.style.gridColumnStart = snext.x
        nextPieceTypeBlock.classList.add("sblock")
        nextPieceTypeBlock2.style.gridRowStart = snext.y2
        nextPieceTypeBlock2.style.gridColumnStart = snext.x2
        nextPieceTypeBlock2.classList.add("sblock")   
        nextPieceTypeBlock3.style.gridRowStart = snext.y3
        nextPieceTypeBlock3.style.gridColumnStart = snext.x3
        nextPieceTypeBlock3.classList.add("sblock")
        nextPieceTypeBlock4.style.gridRowStart = snext.y4
        nextPieceTypeBlock4.style.gridColumnStart = snext.x4
        nextPieceTypeBlock4.classList.add("sblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "block") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = blocknext.y
        nextPieceTypeBlock.style.gridColumnStart = blocknext.x
        nextPieceTypeBlock.classList.add("blockblock")
        nextPieceTypeBlock2.style.gridRowStart = blocknext.y2
        nextPieceTypeBlock2.style.gridColumnStart = blocknext.x2
        nextPieceTypeBlock2.classList.add("blockblock")   
        nextPieceTypeBlock3.style.gridRowStart = blocknext.y3
        nextPieceTypeBlock3.style.gridColumnStart = blocknext.x3
        nextPieceTypeBlock3.classList.add("blockblock")
        nextPieceTypeBlock4.style.gridRowStart = blocknext.y4
        nextPieceTypeBlock4.style.gridColumnStart = blocknext.x4
        nextPieceTypeBlock4.classList.add("blockblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
    else if (nextPieceTypeCheck == "long") {
        const nextPieceTypeBlock = document.createElement("div")
        const nextPieceTypeBlock2 = document.createElement("div")
        const nextPieceTypeBlock3 = document.createElement("div")
        const nextPieceTypeBlock4 = document.createElement("div")
        nextPieceTypeBlock.style.gridRowStart = longnext.y
        nextPieceTypeBlock.style.gridColumnStart = longnext.x
        nextPieceTypeBlock.classList.add("longblock")
        nextPieceTypeBlock2.style.gridRowStart = longnext.y2
        nextPieceTypeBlock2.style.gridColumnStart = longnext.x2
        nextPieceTypeBlock2.classList.add("longblock")   
        nextPieceTypeBlock3.style.gridRowStart = longnext.y3
        nextPieceTypeBlock3.style.gridColumnStart = longnext.x3
        nextPieceTypeBlock3.classList.add("longblock")
        nextPieceTypeBlock4.style.gridRowStart = longnext.y4
        nextPieceTypeBlock4.style.gridColumnStart = longnext.x4
        nextPieceTypeBlock4.classList.add("longblock")
        nextPiece.appendChild(nextPieceTypeBlock)
        nextPiece.appendChild(nextPieceTypeBlock2)
        nextPiece.appendChild(nextPieceTypeBlock3)
        nextPiece.appendChild(nextPieceTypeBlock4)
    }
}