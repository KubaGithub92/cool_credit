"use strict";

// Selecting elements
const btnNavEl = document.querySelector(".header__button-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header__nav-link");

// Opening and closing navigation after clicking the button
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Closing navigation after clicking nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});

// Handling form submit
const form = document.querySelector(".register__form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_number");
const password = document.getElementById("password");
const error = document.querySelector(".register__error");

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.innerHTML = "";

  // First name validation
  if (firstName.value === "" || firstName.value === null) {
    error.insertAdjacentHTML("beforeend", "<div>Vyplňte first name!</div>");
    firstName.style.borderColor = "#c32d2c";
  } else {
    firstName.style.borderColor = "#fff";
  }

  // Last name validation
  if (lastName.value === "" || lastName.value === null) {
    error.insertAdjacentHTML("beforeend", "<div>Vyplňte last name!</div>");
    lastName.style.borderColor = "#c32d2c";
  } else {
    lastName.style.borderColor = "#fff";
  }

  // Email validation
  if (
    email.value === "" ||
    email.value === null ||
    !email.value.match(validEmail)
  ) {
    error.insertAdjacentHTML(
      "beforeend",
      "<div>Vyplňte email ve správném formátu!</div>"
    );
    email.style.borderColor = "#c32d2c";
  } else {
    email.style.borderColor = "#fff";
  }

  // Password validation
  if (password.value.length < 8) {
    error.insertAdjacentHTML(
      "beforeend",
      "<div>Heslo musí obsahovat alespoň 8 znaků!</div>"
    );
    password.style.borderColor = "#c32d2c";
  } else {
    password.style.borderColor = "#fff";
  }

  // Sending the form data

  // const sendData = async () => {
  //   console.log(firstName, lastName);
  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //   };

  //   try {
  //     const response = await fetch("https://www.test.cz", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // sendData();
});
