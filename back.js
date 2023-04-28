const form = document.querySelector('form');
const phoneInput = document.querySelector('#Phone');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const phoneNumber = phoneInput.value.trim();

  // Phone number validation
  const phoneRegex = /^\+?\d{10,14}$/; // Match phone numbers with or without international code (+) and between 10-14 digits
  if (!phoneRegex.test(phoneNumber)) {
    alert('Invalid phone number!');
    return;
  }

  // Submit the form if the phone number is valid
  form.submit();
});
