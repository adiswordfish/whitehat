

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas()
    canvas.position(560,150)

    poseNEt = ml5.poseNet(video,modelLoaded)
    poseNEt.on('pose', gotposes)
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotposes(results){
    if(results.length > 0){
console.log(results)

leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x

difference = floor(leftWristX - rightWristX)
    }
}

function draw(){
    background('#6C91c2')
    textSize(difference)
    fill("#FFE787")
    text('Peter', 50, 400)
    
}