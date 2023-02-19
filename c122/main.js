screen_width = 0;
screen_height = 0;
drawapple="";
apple = "istockphoto-683494078-170667a.jpg";
tonumber = "";
speak_data = ""
var appy = ""

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()

{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
      if(content == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 || 13 || 14 || 15 || 16||17||18||19||20||21||22||23||24||25||26||27||28||29||30||31||32||33||34||35||36||37||38||39||40||41||42||43||44||45||46||47||48||49||50)
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = content+"Apples Drawn"; 
       appy = "set";
      }

}

function setup() {
  canvas = document.getElementById("viewport")
  context = canvas.getContext('2d')
}

function draw() {
  if(appy == "set")
  {
    radius = Math.floor(Math.random() * 100);
    apple = new Image()
    apple.src = drawapple * content
    apple.onload = function(){
        context.drawImage(apple, Math.floor(Math.random()*700, Math.floor(Math.random() * 400) ))
    }
    
    // apples = `<img src=${"istockphoto-683494078-170667a.jpg"}>` * content
    document.getElementById("status").innerHTML = content+"Apples Drawn";
    draw_circle = "";
  }

 

}