var canvas = document.getElementById("myCanvas")
var draw = canvas.getContext("2d");

var width;
var height;

// to fix the slight margin on the top and left
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

// to have the paper dynamically change as the screen changes wrap in this function...
// doesn't work without being called because the function on is called only on resize
// to fix this this call atleast once...
window.onresize = function () {
    // to fill the entire screen...
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    // to keep screen from flickering on resize call loop in resize function on call drawLoop
    drawLoop();
}

// array for all the objects we may have in the gam ie trees? hills?
var objects = [];
// create a bunch of walls make a create event
for (let i = 0; i < 32; i++) {
    new wall(i * 32, 400);
}

window.onresize();

// create a player with new instance of play.js
var Player = new player(50, 50)




// game loop
function loop() {
    stepLoop();
    drawLoop();
}

////
// to keep screen from flicker on resize break loop up in to 2 parts
////

// 1. for the mathmatical part of the loop
function stepLoop() {
    // instead of going through all the objects created by hand, we'll loop through instead
    for (let i = 0; i < objects.length; i++) {
        // if object has step event then call step event
        if (objects[i].step) objects[i].step()
    }
}
// 2. function draw loop for what's being drawn
function drawLoop() {
    background(25, 25, 25)
    // instead of going through all the objects created by hand, we'll loop through instead
    for (let i = 0; i < objects.length; i++) {
        // if object has draw event then call draw event
        if (objects[i].draw) objects[i].draw()
    }
}


// frames per second
var target_fps = 30;
// function will happen every 1sec/fps defined above
setInterval(loop, 1000 / target_fps);



