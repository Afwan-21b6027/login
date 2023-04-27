function ValidRegisForm(event) {
    // event.preventDefault(event);

    var isValid = true;

    // ! Input Fields
    var username = document.getElementById("username-field").value.trim();
    var email = document.getElementById("email-field").value.trim();
    var password = document.getElementById("password-field").value.trim();
    var confirmPassword = document
        .getElementById("confirm-password-field")
        .value.trim();

    // ! Error Message Elements
    var usernameErr = document.getElementById("err-username-span");
    usernameErr.innerHTML = "";

    var emailErr = document.getElementById("err-email-span");
    emailErr.innerHTML = "";

    var passwordErr = document.getElementById("err-password-span");
    passwordErr.innerHTML = "";

    var confirmPasswordErr = document.getElementById("err-confirm-password-span");
    confirmPasswordErr.innerHTML = "";

    // ! Input Field Validations
    if (username === "") {
        usernameErr.innerHTML = "Username is required";
        isValid = false;
    }

    if (email === "") {
        emailErr.innerHTML = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailErr.innerHTML = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        passwordErr.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordErr.innerHTML = "Password must be at least 8 characters";
        isValid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordErr.innerHTML = "Confirm Password is required";
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        confirmPasswordErr.innerHTML = "Passwords do not match";
        isValid = false
    }

    return isValid;
}

function IsFormValid(event){
    if (ValidRegisForm() == false){
        event.preventDefault(event);
    } 
}