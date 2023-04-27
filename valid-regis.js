function ValidRegisForm() {
    // ! Input Fields
    var username = document.getElementById("regis-username-field").value.trim();
    var email = document.getElementById("regis-email-field").value.trim();
    var password = document.getElementById("regis-password-field").value.trim();
    var confirmPassword = document.getElementById("confirm-password-field").value.trim();
    var captcha_checkbox = document.getElementById("regis-captcha-checkbox");

    // ! Input Field Validations
    if (username === "") {
        alert("Username is required!");
        return false;
    }

    if (email === "") {
        alert("Email is required!");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format!");
        return false;
    }

    if (password === "") {
        alert("Password is required!");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (confirmPassword === "") {
        alert("Please enter your password again!");
        return false;
    }
    
    if (password !== confirmPassword) {
        alert("Your password does not match. Please enter again!");
        return false;
    }

    if (!captcha_checkbox.checked){
        alert("Please complete the captcha!");
        return false;
    }

    return true;
}

function IsRegisFormValid(event) {
    if (ValidRegisForm() == false) {
        event.preventDefault();
    }
}