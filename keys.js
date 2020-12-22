// 
var mouseX = 0;
var mouseY = 0;

// whenever the mouse moves call this function e shows what's going on w the mouse
document.onmousemove = function (e) {
    // tells us where the mouse moved to
    // whenever the mouse moves the x and y axis will be updated
    mouseX = e.clientX
    mouseY = e.clientY
}



// an object of all the keys that exist and it will record whether or not they have been pressed
// for every second we have 30 frames as described in main.js
// so when you press a button at that frame its true but as soon as it changes it's false
var keyPress = {};
// temporary
var TkeyPress = {};
// 255 keys in ascii chart
for (let i = 0; i < 255; i++) {
    // turns a number into a letter
    var l = String.fromCharCode(i)
    // by default keyPress is false bc by default we're not pushing anything 
    // was the letter of any for keys pressed? no
    keyPress[l] = false;
    TkeyPress[l] = false;
}

// 
document.onkeypress = function (e) {
    // the key we're pressing = the upper case of the letter being pressed 
    var key = (e.key).toUpperCase();
    // if there is not tkeypress clicked or if it is false
    if (!TkeyPress[key]) {
        // then on key press we will set it to true
        TkeyPress[key] = true;
        keyPress[key] = true;
    }
}


// turn off key press once key is pressed --make sure to call this in the game loop
function keyEnd() {
    // for every iteration in key press
    for (var i in keyPress) {
        // make sure that iteration in the key press object is false
        keyPress[i] = false;
    }
}




// every frame as long as I'm holding down
var keyDown = {};
// the moment/frame that your release the key
var keyRelease = {};