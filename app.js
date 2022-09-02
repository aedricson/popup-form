'use strict';

const form = document.getElementById('form');
const openForm = document.getElementById('open-form');
const closeForm = document.getElementById('close-form');

const openMainModal = document.getElementById('main-modal');
const closeMainModal = document.getElementById('close-main-modal');

const openModal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

const userNameInput = document.getElementById('user-name');
const userEmailInput = document.getElementById('user-email');
const userPhoneInput = document.getElementById('user-phone');

const userNameError = document.getElementById('username-error');
const userEmailError = document.getElementById('email-error');
const userPhoneError = document.getElementById('phone-error');

openForm.addEventListener('click', () => {
  openMainModal.className = 'is-active';
  openForm.style.visibility = 'hidden';
});

closeMainModal.addEventListener('click', () => {
  openMainModal.className = 'modal';
  openForm.style.visibility = 'visible';
});

closeModal.addEventListener('click', () => {
  openModal.className = 'modal';
});

closeForm.addEventListener('click', () => {
  openMainModal.className = 'modal';
  openForm.style.visibility = 'visible';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValues = [
    {
      'value': userNameInput.value,
      'error': userNameError,
    },
    {
      'value': userEmailInput.value,
      'error': userEmailError,
    },
    {
      'value': userPhoneInput.value,
      'error': userPhoneError,
    }
  ];

  for (const formValue of formValues) {
    if (formValue.value.length <= 2) {
      formValue.error.style.visibility = 'visible';

      return;
    }
    
    formValue.error.style.visibility = 'hidden';
  }

  userNameInput.value = '';
  userEmailInput.value = '';
  userPhoneInput.value = '';

  openMainModal.className = 'modal';
  openForm.style.visibility = 'visible';

  openModal.className = 'is-active';
});