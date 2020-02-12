let hero = new Hero()
let keyPressed = {}


window.addEventListener("keydown", event => {
	keyPressed[event.code]=true
	console.log(event.code)
})

window.addEventListener("keyup", event =>{
	keyPressed[event.code]=false
})

function loop() {
	if(keyPressed["ArrowRight"]){
		hero.moveRight()
	}
	if(keyPressed["ArrowLeft"]){
		hero.moveLeft()
	}
	if(keyPressed["ArrowUp"]){
		hero.moveUp()
	}
	if(keyPressed["ArrowDown"]){
		hero.moveDown()
	}
	ERASE()

	
	hero.draw()

	setTimeout(loop, 1000/60)
}
loop()
