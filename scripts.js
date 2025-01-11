// load assets & env first
window.addEventListener('load', function() {
	const canvas = document.getElementById('canvas_a');
	canvas.width = 1280;
	canvas.height = 720;
	
	// access the canvas properties
	const type_2d = canvas.getContext("2d");
	
	
	// game logic
	class Player {
		// access to Game class & it's properties & methods *
		constructor(game) {
			// * which is then converted into a class property
			this.game = game;
		}
			// draw player method
			draw(context){
				context.beginPath();
				// 5 args: x, y, r, rad, end-rad
				context.arc(100, 100, 50, 0, Math.PI * 2);
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