class player {
    // what happens as soon as you create player x & y is where p is on axis
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        // new instance of bbox
        this.bbx = new bbox(this.x, this.y, this.size, this.size)

        // physics
        this.gravity = 7;
        this.yspd = 0;
        // jump speed
        this.jspd = 30;
        // max speed
        this.mspd = 10;
        this.xspd = 0;


        // whenever new player push it in to objects array so that it can then be drawn
        objects.push(this);
    }
    // for every object in loop that has the step event(only player) assign x and y to the mousemovement 
    step() {
        // this.x = mouseX;
        // this.y = mouseY; //--test

        // add gravity to yspd
        this.yspd += this.gravity;

        // lets confirm we're on the ground
        var ground = wallCollision(this.bbx, this.x, this.y + 1);

        // if we press W and player is on the ground
        if (keyPress.W && ground) this.yspd = -this.jspd//-30; //makes box go back up when w is pressed
        // but if we keep touching the space button player can go infinitely up...let's fix this

        /////////////////////////////////
        // COLLISION-horizontal collision
        /////////////////////////////////
        // if the position that we are going to be at is colliding with a wall then we will set our y speed to 0
        if (wallCollision(this.bbx, this.x, this.y + this.yspd)) {
            while (!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspd))) {
                this.y += Math.sign(this.yspd);
            }
            this.yspd = 0;
        }

        // and the y axis = yspd
        this.y += this.yspd;
        // bc we're updating the y position we also have to update the bounding box position --so update with new position
        this.bbx.update(this.x, this.y);

        // more key movements d=direction
        let d = keyDown.D - keyDown.A;
        this.xspd = d * this.mspd;
        //////////////////////////////////
        // COLLISION -vertical collision (same as above but with x)
        ////////////////////////////////////
        // if the position that we are going to be at is colliding with a wall then we will set our y speed to 0
        if (wallCollision(this.bbx, this.x + this.xspd, this.y)) {
            while (!wallCollision(this.bbx, this.x + Math.sign(this.xspd), this.y)) {
                this.x += Math.sign(this.xspd);
            }
            this.xspd = 0;
        }
        this.x += this.xspd;

    }

    draw() {
        // to move player on the y axis -test
        // this.y += 5;
        // we're going to draw a square
        strokeColor(255, 255, 255);
        noFill();
        rectangle(this.x, this.y, this.size, this.size);
        // draw the instance
        // this.bbx.draw();
    }
}

