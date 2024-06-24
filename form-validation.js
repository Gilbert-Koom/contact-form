document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message');
  const terms = document.getElementById('terms');

  const firstNameError = firstName.nextElementSibling;
  const lastNameError = lastName.nextElementSibling;
  const emailError = email.nextElementSibling;
  const genderError = document.getElementById("gender-error")
  const messageError = message.nextElementSibling;
  const termsError = terms.parentElement.nextElementSibling;
  

  // Clear previous error messages
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';
  genderError.textContent = '';
  messageError.textContent = '';
  termsError.textContent = '';

  let isValid = true;

  // First name validation
  if (validator.isEmpty(firstName.value)) {
    firstNameError.textContent = 'This field is required.';
    isValid = false;
  }

  // Last name validation
  if (validator.isEmpty(lastName.value)) {
    lastNameError.textContent = 'This field is required.';
    isValid = false;
  }

  // Email validation
  if (!validator.isEmail(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Gender validation
  if (!gender) {
    genderError.textContent = 'Please select a query type.';
    isValid = false;
  }

  // Message validation
  if (validator.isEmpty(message.value)) {
    messageError.textContent = 'This field is required.';
    isValid = false;
  }

  // Terms and conditions validation
  if (!terms.checked) {
    termsError.textContent = 'To submit this form, please consent to being contacted by the team.';
    isValid = false;
  }

  if (isValid){
    alert('Message sent !')
  }
}

