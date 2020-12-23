var walls = [];

// create a wall class with the same properties as square
class wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 32;
        // creates a new bounding box (needs to be drawn)
        this.bbx = new bbox(this.x, this.y, this.size, this.size);
        // push this wall object to our objects array
        objects.push(this);
        walls.push(this);
    }

    // sets up wall object to be drawn when called and chained
    draw() {
        // we're going to draw a square
        strokeColor(126, 200, 80);
        fillColor(126, 200, 80);
        strokeSize(2);
        // // if it's colliding with the player then it should turn red --test
        // if (this.bbx.collision(Player.bbx)) {
        //     strokeColor(255, 0, 0);
        // }
        // this.bbx.draw() test
        rectangle(this.x, this.y, this.size, this.size);
    }
}

///////////////////////////////////
//* WALL COLLISION
//////////////////////////////////

// a loop to check is we are colliding with a wall
// if this bbx is at some arbitrary position then, will it be colliding with any wall at all?
function wallCollision(bbx, x, y) {
    // save the intial values of x1 and x2 y1 in variables to use for later
    var lastX = bbx.x1;
    var lastY = bbx.y1;
    // update with the new values
    bbx.update(x, y);
    // return value
    var ret = false;
    // loop through every wall in the array of walls
    for (let i = 0; i < walls.length; i++) {
        // & if the bbx of a wall in the wall arr is colliding w the bbx of parameter passed through
        if (walls[i].bbx.collision(bbx)) {
            // then make return true &
            ret = true;
            // break out of loop
            break;
        }
    }

    // updatew with old values -essentially see below
    bbx.update(lastX, lastY);
    return ret;

}

// we're going to take the players bounding box and move it to a different position at the end of the above function I want to move it back to where it was