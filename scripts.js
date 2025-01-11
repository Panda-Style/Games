// load assets & env first
window.addEventListener('load', function() {
	const canvas = document.getElementById('canvas_a');
	canvas.width = 1280;
	canvas.height = 720;
	
	// access the canvas properties
	const type_2d = canvas.getContext("2d");
	type_2d.fillStyle = '#FEFEFE';
	
	// game logic
	class Player {
		// access to Game class & it's properties & methods *
		constructor(game) {
			// * which is then converted into a class property
			this.game = game;

			// generate player in the middle
			this.collisionX = this.game.width * 0.5;
			this.collisionY = this.game.height * 0.5;
			this.collisionRad = 35;

		}
			// draw player method
			draw(context){
				context.beginPath();
				// 5 args: x, y, r, rad, end-rad
				context.arc(this.collisionX, this.collisionY, this.collisionRad, 0, Math.PI * 2);
				/* To limit canvas settings to only specific draw calls, wrap drawing code between save() & restore methods */
				context.save();
				context.globalAlpha = 0.5;
				context.fill();
				context.restore();
				

			}
		
	}
	
	class Game {
		constructor(canvas){
			this.canvas = canvas;
			this.width = this.canvas.width;
			this.height = this.canvas.height;
			// properties of mousedown event
			this.mouse = {
				x: this.width * 0.5,
				y: this.height * 0.5,
				pressed: false

			}

			// create player on load
			this.player = new Player(this)

			// event listener for mouse click in game canvas
		canvas.addEventListener('mousedown', (e) => {
			this.mouse.x = e.offsetX;
			this.mouse.y = e.offsetY;
			this.mouse.pressed = true;
		} );

		// event listener for mouse release
		canvas.addEventListener('mouseup', (e) => {
			this.mouse.x = e.offsetX;
			this.mouse.y = e.offsetY;
			this.mouse.pressed = false;
		} );

		// event listener for mouse movement
		canvas.addEventListener('mousemove', (e) => {
			this.mouse.x = e.offsetX;
			this.mouse.y = e.offsetY;
			console.log(this.mouse.x)
		} );

		}

		

		// access draw method
		render(context){
			this.player.draw(context)
			
		}
	}

	const game = new Game(canvas);
	game.render(type_2d);
	console.log(game);
	// draw & update 
	function animate() {}
});