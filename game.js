
window.addEventListener("keydown", event => {
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
	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let width = Math.random() * canvas.width
	let height = Math.random() * canvas.height
	new Shape(x,y,200,100).draw()

})