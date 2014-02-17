var canvas, context, ball;

var CWIDTH 			= 640;
var CHEIGHT 		= 320;
var YLOCK 			= CHEIGHT/2;
var UPDATE_TIMESTEP	= 20;
var RENDER_TIMESTEP	= 20;

window.onload = function() {

	canvas 			= document.getElementById("anim-canvas");
	canvas.width 	= CWIDTH;
	canvas.height 	= CHEIGHT;
	context 		= canvas.getContext('2d')

	// Create an instance of Ball
	// -------------
	ball = new Ball();

	
	// Draw the ball once onto the canvas
	// -------------
	ball.render(context);


	// Set up setTimeout for update
	// -------------



	// Set up setTimeout for render
	// -------------

}

Ball = function() {
	
	// Attributes of our Ball class
	// -------------
	





	// Function to update the position of the ball
	// -------------
	this.update = function() {

	}


	// Function to draw the ball onto the canvas
	// -------------
	this.render = function(ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.position,YLOCK,this.radius,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
}








// ========================================================================
// 
// 								IGNORE THIS STUFF
// 
// ========================================================================
// Browser compatibility polyfill
// ------------------------------
// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             window.setTimeout(callback, 1000 / 60);
//           };
// })();