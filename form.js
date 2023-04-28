
function validateQuery() {
  var query = document.getElementById("query").value;
  if (query == "") {
    document.getElementById("checkquery").innerHTML = "Please enter details in this field";
    return false;
  } else if (query.length < 30) {
    document.getElementById("checkquery").innerHTML = "Please enter minimum 30 characters";
    return false;
  } else {
    document.getElementById("checkquery").innerHTML = "";
    return true;
  }
}

function validateForm(event) {
  event.preventDefault(); // prevent the default form submission behavior
  console.log(event)
  // Perform form validation here
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name.");
    nameInput.focus();
    return false;
  }

  const phoneInput = document.getElementById("Phone");
  const phone = phoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number.");
    phoneInput.focus();
    return false;
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  const queryInput = document.getElementById("query");
  const query = queryInput.value.trim();
  console.log(query)

  // form using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/addrec", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Handle successful response from server
      document.documentElement.innerHTML = xhr.responseText;
    }
  };
  xhr.send(JSON.stringify({ name: name, phone: phone, email: email, query: query }));

  return true; // Allow the form to submit normally
}
