song1 = "TheScore-Victorious(OfficialLyricVideo).mp3"
song2 = "K-391&RØRY-Aurora(Lyrics).mp3"

function setup(){
    canvas = createCanvas(0,0,200,200)
    canvas.center()

    video = createCapture(VIDEO);
	video.hide();
}

function preload()
{
	song1 = loadSound("music.mp3");
	song2 = loadSound("music2.mp3");
}

function draw(){
    image(video, 0,0,600,500)
}