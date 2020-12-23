// bounding box
// a solid object and physical manifestation of the wall or the player or etc...essentially a box that allows us to calculate collisions with them

class bbox {
    constructor(x, y, w, h) {
        this.x1 = x;
        this.y1 = y;
        this.w = w;
        this.h = h;
        this.x2 = this.x + this.w;
        this.y2 = this.y + this.h;

    }

    // to update the position of the bbox
    update(x, y) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + this.w;
        this.y2 = x + this.h;

    }

    // draw event to show 
    draw() {
        noStroke();
        fillColor(255, 0, 0);
        rectangle(this.x1, this.y1, this.w, this.h)
    }
}