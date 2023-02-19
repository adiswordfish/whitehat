function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  
}

function draw() {
  image(video, 75, 75, 500, 450);
  circle(50,50, 75)
  fill("red")
  circle(50,425, 75)
  fill("red")
  circle(601,50, 75)
  fill("red")
  circle(601,425, 75)
  fill("red")
}

function take_snapshot(){    
  save('student_name.png');
}

