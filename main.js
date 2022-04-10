canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 170;
rover_height = 150;
rover_x = 10;
rover_y = 10;

background_image = "bg.jpg";
rover_image = "car.png";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadbg;
    bg_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadbg() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if(keypress == "37") {
        left();
        console.log("left");
    }

    if(keypress == "38") {
        up();
        console.log("up");
    }

    if(keypress == "39") {
        right();
        console.log("right");
    }

    if(keypress == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}