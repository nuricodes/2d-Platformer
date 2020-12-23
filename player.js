class player {
    // what happens as soon as you create player x & y is where p is on axis
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        // new instance of bbox
        this.bbx = new bbox(this.x, this.y, this.size, this.size)

        // // physics
        this.gravity = 5;
        this.yspd = 0;


        // whenever new player push it in to objects array so that it can then be drawn
        objects.push(this);
    }
    // for every object in loop that has the step event(only player) assign x and y to the mousemovement 
    step() {
        // this.x = mouseX;
        // this.y = mouseY; //--test
        // if we press W then go up 64 on each press
        // if (keyDown.W) this.y += 4 //makes box go down on when w held down

        // add gravity to yspd
        this.yspd += this.gravity;

        // if the position that we are going to be at is colliding with a wall then we will set our y speed to 0
        if (wallCollision(this.bbx, this.x, this.y + this.yspd)) this.yspd = 0;

        // and the y axis = yspd
        this.y += this.yspd;
        // bc we're updating the y position we also have to update the bounding box position --so update with new position
        this.bbx.update(this.x, this.y);

    }

    draw() {
        // to move player on the y axis -test
        // this.y += 5;
        // we're going to draw a square
        strokeColor(255, 255, 255);
        noFill();
        rectangle(this.x, this.y, this.size, this.size);
        // draw the instance
        this.bbx.draw();
    }
}

