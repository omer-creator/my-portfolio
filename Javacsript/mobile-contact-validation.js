const emailInput = document.getElementById('email-input');

function validateForm(event) {
  event.preventDefault();
  if (emailInput.value === emailInput.value.toLowerCase()) {
    event.target.submit();
  } else {
    const errorDiv = document.createElement('div');
    errorDiv.innerText = 'Please enter your email address in lowercase.';
    errorDiv.classList.add('error-message');
    event.target.appendChild(errorDiv);
  }
}

document.querySelector('form').addEventListener('submit', validateForm);
