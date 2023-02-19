function addUser(){
    uname = document.getElementById("user_name").value;
    localStorage.setItem("Username", uname);
    window.location = "kwitterroom.html"
}