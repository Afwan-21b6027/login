function ValidRegisForm() {
    // ! Input Fields
    var username = document.getElementById("regis-username-field").value.trim();
    var email = document.getElementById("regis-email-field").value.trim();
    var password = document.getElementById("regis-password-field").value.trim();
    var confirmPassword = document.getElementById("confirm-password-field").value.trim();
    var captcha_checkbox = document.getElementById("captcha-checkbox")

    // // ! Error Message Elements
    // var usernameErr = document.getElementById("err-username-span");
    // usernameErr.innerHTML = "";

    // var emailErr = document.getElementById("err-email-span");
    // emailErr.innerHTML = "";

    // var passwordErr = document.getElementById("err-password-span");
    // passwordErr.innerHTML = "";

    // var confirmPasswordErr = document.getElementById("err-confirm-password-span");
    // confirmPasswordErr.innerHTML = "";


    // ! Input Field Validations
    if (username === "") {
        // usernameErr.innerHTML = "Username is required";
        alert("Username is required!");
        return false;
    }

    if (email === "") {
        // emailErr.innerHTML = "Email is required";
        alert("Email is required!");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        // emailErr.innerHTML = "Invalid email format";
        alert("Invalid email format!");
        return false;
    }

    if (password === "") {
        // passwordErr.innerHTML = "Password is required";
        alert("Password is required!");
        return false;
    } else if (password.length < 8) {
        // passwordErr.innerHTML = "Password must be at least 8 characters";
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (confirmPassword === "") {
        // confirmPasswordErr.innerHTML = "Confirm Password is required";
        alert("Please enter your password again!");
        return false;
    }
    
    if (password !== confirmPassword) {
        // confirmPasswordErr.innerHTML = "Passwords do not match";
        alert("Your password does not match. Please enter again!");
        return false;
    }

    if (!captcha_checkbox.checked){
        alert("Please complete the captcha!");
        return false;
    }

    return true;
}

function IsFormValid(event) {
    if (ValidRegisForm() == false) {
        event.preventDefault();
    }
}