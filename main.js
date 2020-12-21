"use strict";

const form = document.querySelector(".js-form");
const username = document.querySelector(".js-username");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const password2 = document.querySelector(".js-password2");
const smallUsername = document.querySelector(".js-small-username");
const smallEmail = document.querySelector(".js-small-email");
const smallPassword = document.querySelector(".js-small-password");
const smallPassword2 = document.querySelector(".js-small-password2");

function handleSubmit(ev) {
  ev.preventDefault();
  if (username.value === "") {
    smallUsername.classList.add("error");
    username.classList.remove("success");
    username.classList.add("error");
    smallUsername.innerHTML = "Username is required";
  } else {
    smallUsername.classList.remove("error");
    username.classList.remove("error");
    username.classList.add("success");
  }
  if (email.value === "") {
    smallEmail.classList.add("error");
    email.classList.remove("success");
    email.classList.add("error");
    smallEmail.innerHTML = "Email is required";
  } else if (!checkEmail(email.value)) {
    smallEmail.innerHTML = "Email is not valid";
  } else {
    smallEmail.classList.remove("error");
    email.classList.remove("error");
    email.classList.add("success");
  }
  if (password.value === "") {
    smallPassword.classList.add("error");
    password.classList.remove("success");
    password.classList.add("error");
    smallPassword.innerHTML = "Password is required";
  } else {
    smallPassword.classList.remove("error");
    password.classList.remove("error");
    password.classList.add("success");
  }
  if (password2.value === "") {
    smallPassword2.classList.add("error");
    password2.classList.remove("success");
    password2.classList.add("error");
    smallPassword2.innerHTML = "Password is required";
  } else {
    smallPassword2.classList.remove("error");
    password2.classList.remove("error");
    password2.classList.add("success");
  }
}

function checkEmail(email) {
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidation.test(String(email).toLowerCase());
}

form.addEventListener("submit", handleSubmit);
