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
				context.globalAlpha = 0.5;
				context.fill();
				

			}
		
	}
	
	class Game {
		constructor(canvas){
			this.canvas = canvas;
			this.width = this.canvas.width;
			this.height = this.canvas.height;

			// create player on load
			this.player = new Player(this)
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