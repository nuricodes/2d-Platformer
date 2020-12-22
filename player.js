class player {
    // what happens as soon as you create player x & y is where p is on axis
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        // whenever new player push it in to objects array so that it can then be drawn
        objects.push(this);
    }

    draw() {
        // to move player on the y axis -test
        this.y += 5;
        // we're going to draw a square
        strokeColor(255, 255, 255);
        noFill();
        rectangle(this.x, this.y, this.size, this.size);
    }
}

