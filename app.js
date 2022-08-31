'use strict';

const form = document.getElementById('form');
const openForm = document.getElementById('open-form');
const closeForm = document.getElementById('close-form');

const userNameInput = document.getElementById('user-name');
const userEmailInput = document.getElementById('user-email');
const userPhoneInput = document.getElementById('user-phone');

const userNameError = document.getElementById('username-error');
const userEmailError = document.getElementById('email-error');
const userPhoneError = document.getElementById('phone-error');

openForm.addEventListener('click', () => {
  form.style.transform = 'translateX(0)';
  openForm.style.visibility = 'hidden';
});

closeForm.addEventListener('click', () => {
  form.style.transform = 'translateX(-200%)';
  openForm.style.visibility = 'visible';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (userNameInput.value.length <= 2) {
    userNameError.style.visibility = 'visible';

    return;
  }

  userNameError.style.visibility = 'hidden';

  if (userEmailInput.value.length <= 2) {
    userEmailError.style.visibility = 'visible';

    return;
  }

  userEmailError.style.visibility = 'hidden';

  if (userPhoneInput.value.length <= 2) {
    userPhoneError.style.visibility = 'visible';

    return;
  }

  userPhoneError.style.visibility = 'hidden';

  userNameInput.value = '';
  userEmailInput.value = '';
  userPhoneInput.value = '';

  form.style.transform = 'translateX(-200%)';
  openForm.style.visibility = 'visible';

  alert('Form submitted successfully');
});