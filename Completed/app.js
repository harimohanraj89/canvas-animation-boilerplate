var canvas, context, ball;

var CWIDTH 		= 640;
var CHEIGHT 	= 320;
var YLOCK 		= CHEIGHT/2;
var TIMESTEP	= 20;
var DRAWFLAG	= true

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


window.onload = function() {

	canvas 			= document.getElementById("anim-canvas");
	canvas.width 	= CWIDTH;
	canvas.height 	= CHEIGHT;
	context 		= canvas.getContext('2d')

	ball = new Ball();
	updateHandle = setInterval(updateAll, TIMESTEP);
	window.requestAnimFrame(drawAll);
}


function Ball() {
	this.position 	= CWIDTH/2;
	this.velocity 	= 200;
	this.radius   	= 10;
	this.color		= "#777"


	this.update = function() {
		this.position += this.velocity * TIMESTEP / 1000;

		if (this.position > canvas.width - this.radius) {
			this.position = 2*(canvas.width-this.radius) - this.position;
			this.velocity *= -1;
		}

		if (this.position < this.radius) {
			this.position = 2*this.radius - this.position;
			this.velocity *= -1;
		}
	}

	this.draw = function(ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.position,YLOCK,this.radius,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
}

function updateAll() {
	ball.update();
}

function drawAll() {
	if (DRAWFLAG) {
		context.clearRect(0,0,canvas.width, canvas.height);
		ball.draw(context);	
	}
	window.requestAnimFrame(drawAll);
}