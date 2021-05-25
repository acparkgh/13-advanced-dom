'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector("button.btn--scroll-to");
const section1 = document.querySelector("section#section--1");
const h1 = document.querySelector("h1");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach((button) => {
  return button.addEventListener("click", openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

// const alertH1 = function () {
//   alert("addEventListener: Great! You are reading the Heading");
//   // h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1)
// }, 5000);

const randomInt = ( min, max ) => {
  return Math.floor( Math.random() * (max - min + 1) + min );
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

document.querySelector("a.nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget===this);
});

document.querySelector("ul.nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector("nav.nav").addEventListener("click", function (e) {
  e.currentTarget.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget===this);
  // e.stopPropagation();
});

document.body.addEventListener("click", function (e) {
  e.currentTarget.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

// h1.onmouseenter = function () {
//   alert("You clicked Heading");
// };


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section")
// console.log(allSections);

// const sectionOne = document.querySelector("#section--1");
// const sectionOne = document.getElementById("section--1");
// console.log(sectionOne);

// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// const allSections = document.getElementsByClassName("section");
// console.log(allSections);

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.className = "cookie-message cookie-message1";
// message.id = "cookie"

// message.textContent = "We use cookies for imporved functionality and analytics.";
// message.innerHTML = "We use cookies for imporved functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";
// header.append(message);
// header.after(message)

// const cookieButton = document.querySelector(".btn--close--cookie");
// cookieButton.addEventListener("click", function () {
//   // message.parentElement.removeChild(message);
//   message.remove();
// });

// message.style.backgroundColor = "#37383d";
// message.style.width = "110%"
// message.style.setProperty("width", "110%")

// console.log(message.style.width);
// console.log(getComputedStyle(message).width);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orange")

// const logo = document.querySelector("img.nav__logo");
// const logo1 = document.querySelector(".nav__logo");
// console.log(logo);
// console.log(logo1);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// console.log(logo.getAttribute("class"));
// console.log(logo.dataset.versionNumber);

// logo.alt = "Beautiful minimalist logo";
// logo.setAttribute("company", "Bankist");