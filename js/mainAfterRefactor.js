"use strict";

const form = document.querySelector(".js-form");
const username = document.querySelector(".js-username");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const password2 = document.querySelector(".js-password2");

//Functio to show input error
function showError(input, message) {
  input.classList.add("error");
  const small = input.nextElementSibling;
  small.classList.add("error");
  small.innerHTML = message;
}

//Function to show success outline
function showSuccess(input) {
  input.classList.remove("error");
  input.classList.add("success");
  const small = input.nextElementSibling;
  small.classList.remove("error");
}

//Function to check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Function to get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Function to email validation
function checkEmail(input) {
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Function to check input length
function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be between ${min} and ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPassword(input) {
  const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (passwordValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(
      input,
      "Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
    );
  }
}

//Function to check password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords don't match");
  }
}

//Handler
function handleSubmit(ev) {
  ev.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  // checkLength(password, 6, 20);
  checkEmail(email);
  checkPassword(password);
  checkPasswordsMatch(password, password2);
}

//Event Listener
form.addEventListener("submit", handleSubmit);
