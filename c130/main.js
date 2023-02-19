song1 = ""
song2 = ""
leftwristx = 0;
leftwristy =0;
rightwristx = 0
rightwristy = 0
scoreleftwrist = 0;
scorerightwrist = 0;
songstatus = ""
function setup(){
    canvas = createCanvas(0,0,200,200)
    canvas.center()

    video = createCapture(VIDEO);
	video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("Posent is initialized")
}
function preload()
{
	song1 = loadSound("TheScore-Victorious(OfficialLyricVideo).mp3");
	song2 = loadSound("K-391&RØRY-Aurora(Lyrics).mp3");
}

function draw(){
    image(video, 0,0,600,500)
    fill("FF0000")
    stroke("FF0000")
}
function gotPoses(results){
    if(results.length > 0){
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log(results)
        leftwristx = results[0].pose.leftwrist.x
        leftwristy = results[0].pose.leftwrist.y
        rightwristx = results[0].pose.leftwrist.x
        rightwristy = results[0].pose.leftwrist.y
        console.log("right"+rightwristx, rightwristy  +"now left" + leftwristx, leftwristy)
    }
}