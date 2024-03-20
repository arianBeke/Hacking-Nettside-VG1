var password = "admin"

function getLogin() {
    var pass = document.getElementById("loginForm").elements[0].value

    if (pass == password) {
        console.log("login");
        window.location.pathname = '/index.html'
        alert("Succesfully logged in!")
        return
    }
    alert("Wrong password!")
}