a = localStorage.getItem("Username")

function logout(){
    window.location = "kwitter.html"
}

function addroom(){
    room = document.getElementById("roomname").value;
    localStorage.setItem("roomname", room)
}

console.log(a)
document.getElementById("output").innerHTML = "User name:" + a;

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();