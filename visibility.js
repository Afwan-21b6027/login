function ChangeToLogin(){
    var loginDiv = document.getElementById('content-div-login');
    loginDiv.classList.toggle('login-active');

    var regisDiv = document.getElementById('content-div-register');
    regisDiv.classList.remove('regis-active');
}

function ChangeToRegister(){
    var loginDiv = document.getElementById("content-div-login");
    loginDiv.classList.remove("login-active");

    var regisDiv = document.getElementById("content-div-register");
    regisDiv.classList.toggle("regis-active");
}