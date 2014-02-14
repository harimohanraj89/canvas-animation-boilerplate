var canvas, context, ball;

var CWIDTH 		= 640;
var CHEIGHT 	= 320;
var YLOCK 		= CHEIGHT/2;
var TIMESTEP	= 20;
var DRAWFLAG	= true

window.onload = function() {

	canvas 			= document.getElementById("anim-canvas");
	canvas.width 	= CWIDTH;
	canvas.height 	= CHEIGHT;
	context 		= canvas.getContext('2d')
}


// IGNORE THIS STUFF
// -----------------------------------
// Browser compatibility polyfill
// -----------------------------------

// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             window.setTimeout(callback, 1000 / 60);
//           };
// })();