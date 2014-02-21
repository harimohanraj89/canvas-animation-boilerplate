var canvas, context, ball;

var CWIDTH = 640;
var CHEIGHT = 320;
var YLOCK = CHEIGHT/2;
var UPDATE_TIMESTEP = 10;
var RENDER_TIMESTEP = 50;

window.onload = function() {

	canvas = document.getElementById("anim-canvas");
	canvas.width = CWIDTH;
	canvas.height = CHEIGHT;
	context = canvas.getContext('2d');

	// Create an instance of Ball
	// -------------
	ball = new Ball();


	// Draw the ball once onto the canvas
	// -------------
	ball.render();

	// IT'S WORKING!!
	// So apparently, setInterval should only accept global functions!
	// So we just wrap our ball.update() and ball.render() into global functions.
	// Look at the bottom!


	// Set up setInterval for update
	// -------------
	setInterval(updateAll, UPDATE_TIMESTEP);


	// Set up setInterval for render
	// -------------
	setInterval(renderAll, RENDER_TIMESTEP);
}

Ball = function() {

	// Attributes of our Ball class
	// -------------
	this.color = "#777";
	this.radius = 20;
	this.position = CWIDTH/2;
	this.velocity = 15;

	// Function to update the position of the ball
	// -------------
	this.update = function() {
		this.position += this.velocity * UPDATE_TIMESTEP/1000;
	}


	// Function to draw the ball onto the canvas
	// -------------
	this.render = function() {
		context.save();
		context.beginPath();
		context.fillStyle = this.color;
		context.arc(this.position,YLOCK,this.radius,0,2*Math.PI);
		context.fill();
		context.restore();
	}
}

// Stick this into a global function so that setInterval works! :D
updateAll = function() {
	ball.update();
}

// Stick this into a global function so that setInterval works! :D
renderAll = function() {
	context.clearRect(0,0,CWIDTH,CHEIGHT); // clear your canvas before re-drawing
	ball.render();
}
