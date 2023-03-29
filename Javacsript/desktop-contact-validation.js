const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  // Prevent the form from submitting if validation fails
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.style.display = 'block';
    emailInput.value = emailInput.value.toLowerCase();
  } else {
    errorMessage.style.display = 'none';
  }
});
