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
    console.log(link);
    headerEl.classList.toggle("nav-open");
  });
});
