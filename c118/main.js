array = ["pen", "paper", "book", "bottle"]

function setup(){
    canvas = createCanvas(280,288)
    canvas.center()
    background("white")
}

function clearCanvas(){
    background("white");
}

randomnumber = Math.floor(Math.random(array.length))

