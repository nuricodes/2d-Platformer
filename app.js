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
}

window.onresize();


//////////////////////////////
//* DRAWER
/////////////////////////////

// draws a rectangle
function rectangle(x, y, w, h) {
    // starts the draw
    draw.beginPath();
    // defines where to draw
    draw.rect(x, y, w, h);
    // fill in that area with a color
    draw.fill();
    // the outline
    draw.stroke();
}

// change color of rectangle
function fillColor(r, g, b) {
    r = String(r);
    g = String(g);
    b = String(b)
    draw.fillStyle = `rgb(${r}, ${g}, ${b})`;;
}

// change stroke(border) color of rectangle
function strokeColor(r, g, b) {
    r = String(r);
    g = String(g);
    b = String(b)
    draw.strokeStyle = `rgb(${r}, ${g}, ${b})`;;
}

// change stroke size
function strokeSize(size) {
    draw.lineWidth = String(size);
}

// change the background or draw a rectangle over the entire screen
function background(r, g, b) {
    fillColor(r, g, b);
    rectangle(0, 0, width, height)
}


// background color
background(25, 25, 25)
// stroke size
strokeSize(4)
// stroke color
strokeColor(0, 255, 0)
// fill with the color we want
fillColor(255, 0, 125)
//draw rectangle with these measurements
rectangle(25, 25, 50, 100);




