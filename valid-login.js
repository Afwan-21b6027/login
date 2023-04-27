function ValidLoginForm(){
  // ! Input Fields
  var username = document.getElementById("login-username-field").value.trim();
  var password = document.getElementById("login-password-field").value.trim();
  var captcha_checkbox = document.getElementById("login-captcha-checkbox");

  // ! Validations

  if (username === "") {
        alert("Username is required!");
        return false;
    }

    if (password === "") {
        alert("Password is required!");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (!captcha_checkbox.checked){
        alert("Please complete the captcha!");
        return false;
    }

    return true;
}

function IsLoginFormValid(event){
  if (ValidLoginForm() == false){
    event.preventDefault();
  }
}