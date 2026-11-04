// Login function
function login() {

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email != "" && password != "") {

        alert("Login Successful!");

    }

    return false;
}


// Signup function
function signup() {

    var name = document.getElementById("fullName").value;
    var email = document.getElementById("signupEmail").value;

    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check password matching
    if (password != confirmPassword) {

        alert("Password and Confirm Password do not match!");

        return false;
    }

    alert("Registration Successful! Welcome " + name);

    return false;
}


// Show and Hide Password
function togglePassword(id, button) {

    var password = document.getElementById(id);

    if (password.type == "password") {

        password.type = "text";
        button.innerHTML = "Hide";

    } else {

        password.type = "password";
        button.innerHTML = "Show";

    }
}


// Forgot Password
function forgotPassword(event) {

    event.preventDefault();

    alert("Please contact the website administrator to reset your password.");

}