const form = document.querySelector('form');
const formContainer = document.querySelector('#form-container');
const paymentButton = document.querySelector('#payment-button');
const reviewButton = document.querySelector('#review-button');

// Disable the payment and review buttons by default
paymentButton.disabled = true;
reviewButton.disabled = true;

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;

  if (name === '' || email === '' || phone === '') {
    alert('Please fill out all required fields');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Please enter a 10-digit phone number');
    return;
  }

  const message = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\nPreferred Time: ${time}` ;

  alert(message);
  alert("Thank you for your response");

  // Enable the payment and review buttons if the form is valid
  paymentButton.disabled = false;
  reviewButton.disabled = false;

  form.submit();
});

function isValidEmail(email) {
  // Use a regular expression to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Use a regular expression to validate the phone format
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
