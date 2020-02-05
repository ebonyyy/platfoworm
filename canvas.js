let CANVAS = document.getElementById("display")

console.log(CANVAS)
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight
let CTX = CANVAS.getContext("2d")


function ERASE(){
CTX.fillStyle = "grey"
CTX.fillRect(0,0,CANVAS.width,CANVAS.height)
}