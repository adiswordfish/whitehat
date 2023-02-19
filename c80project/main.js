guests_array = []

function Sumbit(input1value){
    var htmldata;
    var input1value = document.getElementById("send").value;

    guests_array.push(input1value)
    console.log(guests_array)
    htmldata ="<section class='cards'>"
    for(var i=0;i<guests_array.length;i++){
        htmldata = htmldata+'<div class="card">' + guests_array[i] + '</div>'
    }
    htmldata = htmldata+"</section>"
    document.getElementById("showing").innerHTML = htmldata;
}
function Show(){
    var htmldata;
    htmldata ="<section class='cards'>"
    for(var i=0;i<guests_array.length;i++){
        htmldata = htmldata+'<div class="card">' + guests_array[i] + '</div>'
    }
    htmldata = htmldata+"</section>"
    document.getElementById("show2").innerHTML = htmldata;
}
function Sorter(){
    var htmldata;
    htmldata ="<section class='cards'>"
    guests_array.sort()
    for(var i=0;i<guests_array.length;i++){
        htmldata = htmldata+'<div class="card">' + guests_array[i] + '</div>'
    }
    htmldata = htmldata+"</section>"
    document.getElementById("show3").innerHTML = htmldata;
}
function Searching(){
    var input2value = document.getElementById("search").value;
    var found=0
    var j;
    for(j=0;j<guests_array.length;j++){
        if(input2value==guests_array[j]){
            found+=1
        }
        document.getElementById("show4").innerHTML="name found "+found+"time(s)";
        console.log("found name "+found+" time(s)")
    }
    
}

    