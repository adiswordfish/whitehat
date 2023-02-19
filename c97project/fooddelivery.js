function Addnameetc(){
    name = document.getElementById("name").value
    password = document.getElementById("password").value
    email = document.getElementById("email").value

    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)

    console.log(name, email, password)

    // localStorage.clear()

    window.location = "foodoptions.html"
}