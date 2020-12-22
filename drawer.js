///////////////////////////////////////////////
//* DRAWER - Where we draw everything we'll use
///////////////////////////////////////////////

// draws a rectangle
function rectangle(x, y, w, h) {
    // stops last draw starts new one
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

// no stroke
function noStroke(r, g, b, a) {
    draw.fillStyle = 'rgba(0,0,0,0)'
}

// no fill
function noFill(r, g, b, a) {
    draw.fillStyle = 'rgba(0,0,0,0)'
}

// line from one point to another
function line(x1, y1, x2, y2) {
    // start the path
    draw.beginPath();
    // start from here
    draw.moveTo(x1, y1);
    // go to here
    draw.lineTo(x2, y2);
    // pencil will emit a mark
    draw.stroke();
}

function circle(x, y, r) {
    // start new path end last one
    draw.beginPath();
    // draw the circle by completing the arc
    draw.arc(x, y, r, 0, 2 * Math.PI);
    draw.fill();
    draw.stroke();
}







