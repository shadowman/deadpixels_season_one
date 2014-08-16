var Pong = (function() {
	var screen = document.createElement('canvas'),
		ctx = screen.getContext('2d');
	screen.width 	= 300; 
	screen.height 	= 300;
	document.getElementsByTagName('body')[0].appendChild(screen);
	
	return {
		start: function() {
			ctx.fillStyle = '#000000';
			ctx.fillRect(0, 0, 300, 300);

			ctx.fillStyle = '#FFFFFF';
			ctx.fillRect(10, 130, 10, 40);

			ctx.fillRect(280, 130, 10, 40);

			ctx.fillRect(25, 145, 10, 10);

		},
		play: function() {
			alert('Lets play!');
		}
	};
})();