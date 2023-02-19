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
    if(results.length>0){
        console.log(results)
    }
}

function draw(){
    background('#969A97')
}