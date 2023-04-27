document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("login-form");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});

function validateForm() {
  // ! Input Fields
  var username = document.getElementById("username-field").value;
  var email = document.getElementById("email-field").value;
  var password = document.getElementById("password-field").value;
  var errors = false;

  // ! isUsername(empty)
  if (username == "") {
    document.getElementById("err-username-span").innerHTML =
      "Username is required.";
    errors = true;
  } else {
    document.getElementById("err-username-span").innerHTML = "";
  }

  // ! isEmail(empty)
  if (email == "") {
    document.getElementById("err-email-span").innerHTML = "Email is required.";
    errors = true;
  } else if (!isValidEmail(email)) {
    document.getElementById("err-email-span").innerHTML =
      "Invalid email format.";
    errors = true;
  } else {
    document.getElementById("err-email-span").innerHTML = "";
  }

  // ! isPassword(empty)
  if (password == "") {
    document.getElementById("err-password-span").innerHTML =
      "Password is required.";
    errors = true;
  } else {
    document.getElementById("err-password-span").innerHTML = "";
  }
  return !errors;
}

function isValidEmail(email) {
  // Regular expression to validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
