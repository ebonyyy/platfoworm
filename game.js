let hero = new Hero()
let shapes = []

ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	console.log(event.code)
	if (event.code === 'KeyS'){
	let colorIndex = Math.random()
	let color = "red"
	if (colorIndex <= 0.3) {
		color = "blue"
	}
	else if ((colorIndex >0.3 ) && (colorIndex <=0.6)){
		color = "purple"
	}
	else if ((colorIndex >0.6) && (colorIndex <= 0.9)){
		color = "black"
	}
	else if (colorIndex >0.9) {
		color = "pink"
	}
	CTX.fillStyle = color

	let x = Math.random() * CANVAS.width
	let y = Math.random() * CANVAS.height
	let width = Math.random() * CANVAS.width
	let height = Math.random() * CANVAS.height
	let s = new Shape(x,y,width,height)
	shapes.push(s)
}
if(event.code === "ArrowRight"){
	hero.moveRight()
}
ERASE()

shapes.forEach(s => s.draw())
hero.draw()
})

