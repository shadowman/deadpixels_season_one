var Pong = (function() {
	var screen = document.createElement('canvas'),
		ctx = screen.getContext('2d');
	screen.width 	= 300; 
	screen.height 	= 300;
	document.getElementsByTagName('body')[0].appendChild(screen);

	function drawBall(x, y) {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(x, y, 10, 10);		
	}
	
	function drawPlayer(x, y) {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(x, y, 10, 40);		
	}

	function drawCourt() {
		ctx.fillStyle = '#000000';
		ctx.fillRect(0, 0, 300, 300);
	}

	return {
		start: function() {
			drawCourt();

			drawPlayer(10, 130)

			drawPlayer(280, 130);

			drawBall(25, 145);

		},
		play: function() {
			alert('Lets play!');
		}
	};
})();