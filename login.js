  function validateForm() {
    var username = document.getElementById("username").value;
    var pw = document.getElementById("pswd").value;

    // check empty password field
    if (pw == "") {
      document.getElementById("message").innerHTML = "**Fill the password please!";
      return false;
    }

    // minimum password length validation
    if (pw.length < 8) {
      document.getElementById("message").innerHTML = "**Password length must be at least 8 characters";
      return false;
    }

    // maximum length of password validation
    if (pw.length > 15) {
      document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
      return false;
    }

    // password is correct
    else {
      alert("Password is correct");
    }
  }

  function checkUsername() {
    var username = document.getElementById("username").value;

    // check if username contains "@"
    if (!username.includes("@")) {
      document.getElementById("message1").innerHTML = "**Username must contain '@' symbol";
    }
  }