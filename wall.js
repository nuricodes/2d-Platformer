var walls = [];

// create a wall class with the same properties as square
class wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        // push this wall object to our objects array
        objects.push(this);
        walls.push(this);
    }

    // sets up wall object to be drawn when called and chained
    draw() {
        // we're going to draw a square
        strokeColor(255, 255, 255);
        noFill();
        strokeSize(2)
        rectangle(this.x, this.y, this.size, this.size);
    }
}