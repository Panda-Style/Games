// load assets & env first
window.addEventListener('load', function() {
	const canvas = document.getElementById('canvas_a');
	canvas.width = 1280;
	canvas.height = 720;
	
	// access the canvas properties
	const type_2d = canvas.getContext("2d");
	
	
	// game logic
	class Player {
		constructor(game) {
			this.game = game;
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
	}

	const game = new Game(canvas);
	
	// draw & update 
	function animate() {}
});