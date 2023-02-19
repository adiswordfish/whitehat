// const { uptime } = require("node:process");

canvas = document.getElementById('mycanvas')

// block_image_width = 30;
// block_image_height =30;
imageheight = prompt("Enter where you want your image (height)");
imagewidth = prompt("Enter where want your image (width)")

player_x = 10;
player_y = 10;

keypressed  = 

player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
};

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        player_object.scaleToWidth(imagewidth);
        player_object.scaleToHeight(imageheight);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(block_image_object)
    });
};

function my_keydown(){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        console.log("p and shift were pressessssed togeeethher");
        imagewidth = imagewidth + 10;
        imageheight = imageheight + 10;
        document.getElementById("current_width").innerHTML = imagewidth;
        document.getElementById("current_height").innerHTML = imageheight;
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("p and shift were pressessssed togeeethher");
        imagewidth = imagewidth - 10;
        imageheight = imageheight - 10;
        document.getElementById("current_width").innerHTML = imagewidth;
        document.getElementById("current_height").innerHTML = imageheight;
    }
 
}

if(keypressed == "40"){
    up();
    console.log("up");
}

if(keypressed == "38"){
    down();
    console.log("down");
}

if(keypressed == "37"){
    left();
    console.log("left");
}

if(keypressed == "39"){
    right();
    console.log("right");
}
if(keypressed == "70"){
    new_image("picture11.png")
    console.log("face");
}
if(keypressed == "66"){
    new_image("picture7.png");
    console.log("body");
}
if(keypressed == "82"){
    new_image("picture10.png");
    console.log("right hand");
}
if(keypressed == "76"){
    new_image("picture9.png");
    console.log("left hand");
}
if(keypressed == "69"){
    new_image("picture2.png");
    console.log("legs")
}

function up(){
    if(player_y >= 0){
        player_y = player_y - imageheight;
        console.log("block image height = " + imageheight);
        console.log("Up arrow pressed")
        canvas.remove(player_object);
        player_update
    }
}

function down(){
    if(player_y >= canvas.height){
        player_y = player_y + imageheight;
        console.log("block image height = " + imageheight);
        console.log("Up arrow pressed")
        canvas.remove(player_object);
        player_update()
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - imageheight;
        console.log("block image height = " + imageheight);
        console.log("Up arrow pressed")
        canvas.remove(player_object);
        player_update()
    }
}

function left(){
    if(player_x >= canvas.width){
        player_x = player_x + imageheight;
        console.log("block image height = " + imageheight);
        console.log("Up arrow pressed")
        canvas.remove(player_object);
        player_update()
    }
}