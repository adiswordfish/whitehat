quantity = document.getElementById("quantity").innerHTML;
var quantity = parseInt(quantity)
quantity1 = document.getElementById("quantity1").innerHTML;
var quantity1 = parseInt(quantity1)
quantity2 = document.getElementById("quantity2").innerHTML;
var quantity2 = parseInt(quantity2)
down = true
costburger = document.getElementById("cost").innerHTML
costpizza = document.getElementById("cost1").innerHTML
costgarlicbread = document.getElementById("cost2").innerHTML
container = document.getElementById("container");

totalcost = costburger * quantity + costpizza * quantity1 + costgarlicbread * quantity2
console.log(totalcost)

console.log(costgarlicbread, costpizza, costburger)
function add(){
    if(down==true){
        document.getElementById("quantity").innerHTML = quantity++ + 1;
        console.log("it should add multiple times")
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";
   
}

function add1(){
    if(down==true){
        document.getElementById("quantity1").innerHTML = quantity1++ + 1;
    console.log("it should add multiple times function1")
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";
    
}

function add2(){
    if(down==true){
        document.getElementById("quantity2").innerHTML = quantity2++ + 1;
        console.log("it should add multiple times")
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";
    
}

function minus(){
    if(quantity==0){
        down=false
    }
    else{
        document.getElementById("quantity").innerHTML = quantity-- -1;
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";

    
}

function minus1(){
    
    if(quantity1==0){
        down=false
    }
    else{
        document.getElementById("quantity1").innerHTML = quantity1-- -1;
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";
}

function minus2(){
    
    if(quantity2==0){
        down=false
    }
    else{
        document.getElementById("quantity2").innerHTML = quantity2-- -1;
    }
    totalcost = (costburger * quantity) + (costpizza * quantity1) + (costgarlicbread * quantity2)
    console.log(totalcost)
    console.log("Hello i am " + totalcost)
    totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";
}

// toString(totalcost)
// console.log(totalcost)

// cost = document.createElement("p")
// cost.id = "costs"
// text = document.createTextNode(totalcost)
// cost.innerHTML = text;


// document.getElementById("container").appendChild(cost)


// parseInt(totalcost)
console.log("Hello i am " + totalcost)
totalcostlabel = document.getElementById("total").innerHTML = "Cost: $" + "" + totalcost + "";


function Proceed(){
    window.location = "payment.html";
}