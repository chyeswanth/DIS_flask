
const form = document.querySelector('form');
const formContainer = document.querySelector('#form-container');
const phoneInput = document.querySelector('#phone');

function dateToday() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; // January is 0
  var year = today.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return year + "-" + month + "-" + day;
}

function validateappoint(event) {
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

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number.");
    phoneInput.focus();
    return false;
  }

  const dateInput = document.getElementById("date");
  const date = dateInput.value.trim();

  const timeInput = document.getElementById("time");
  const time = timeInput.value.trim();

  // Validation succeeded, submit the form using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/addrecords", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Handle successful response from server
      document.documentElement.innerHTML = xhr.responseText;
    }
  };
  xhr.send(JSON.stringify({ name: name, phone: phone, email: email, date: date, time: time }));

  return true; // Allow the form to submit normally
}


// form.addEventListener('submit', e => {
//   e.preventDefault();
  
//   const name = document.querySelector('#name').value;
//   const email = document.querySelector('#email').value;
//   const phone = document.querySelector('#phone').value;
//   const date = document.querySelector('#date').value;
//   const time = document.querySelector('#time').value;
//   const phoneNumber = phoneInput.value.trim();

// // Phone number validation
//   const phoneRegex = /^\+?\d{10,14}$/; // Match phone numbers with or without international code (+) and between 10-14 digits
//   if (!phoneRegex.test(phoneNumber)) {
//     alert('Invalid phone number!');
//     return;
//   }
  
//   const message = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\nPreferred Time: ${time}`;

//   // Display the message using a popup instead of an alert
//   if (confirm(message + "\n\nClick OK to proceed to payment.")) {
//     // Redirect the user to the payment page
//     window.location.href = "{{ url_for('pay1')}}";
    
//     // Display a message thanking the user for their response
//     alert("Thank you for your response. You will now be redirected to the payment page.");
//   }
// });
