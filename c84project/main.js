canvas  = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
car1_width=100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_image = "Picture3.png"
car2_width=100;
car2_height = 90;
car2_x = 10;
car2_y = 20;
car2_image = "Picture2.png"
background_image = "racing.jpg"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadCars(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up()
        console.log("up")
    }
    if(keyPressed == '40'){
        down()
        console.log("down")
    }
    if(keyPressed == '37'){
        left()
        console.log("left")
    }
    if(keyPressed == '39'){
        right()
        console.log("right")
    }
}