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

// Page navigation

const navLinkClick = function (element) {
   console.log(`${element} clicked`);
};

const navLinks = document.querySelector("ul.nav__links");

// navLinks.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

navLinks.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav__link")) {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    document.querySelector(`section${id}`).scrollIntoView({ behavior: "smooth" });
  };
});

const tabs = document.querySelectorAll("button.operations__tab");
const tabsContainer = document.querySelector("div.operations__tab-container");
const tabsContents = document.querySelectorAll("div.operations__content");

// console.log(tabsContainer);

tabsContainer.addEventListener("click", function (event) {
  const clickedTab = event.target.closest(".operations__tab");
  // console.log(clickedTab);
  // console.log(clickedTab.dataset);
  if (!clickedTab) return;
  tabs.forEach(function (el) {
    el.classList.remove("operations__tab--active");
  })
  clickedTab.classList.add("operations__tab--active");
  
  const activeTabData = clickedTab.dataset.tab;
  const activeTabContent = document.querySelector(`.operations__content--${activeTabData}`);

  tabsContents.forEach(function (el) {
    el.classList.remove("operations__content--active");
  });

  activeTabContent.classList.add("operations__content--active");
  
});

// console.log(h1);
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// h1.firstElementChild.style.setProperty("color", "orangered");
// h1.lastElementChild.style.color = "white";
// console.log(h1.querySelectorAll("span.highlight"));

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest(".header"));
// h1.closest(".header").style.setProperty("background", "var(--gradient-secondary)")

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(document.querySelector("h4").previousElementSibling);
// console.log(document.querySelector("h4").nextElementSibling);
// console.log(h1.parentElement.children);
// const allSiblings = h1.parentElement.children;
// [...allSiblings].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)"
//   }
// })

// const alertH1 = function () {
//   alert("addEventListener: Great! You are reading the Heading");
//   // h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1)
// }, 5000);

// const randomInt = ( min, max ) => {
//   return Math.floor( Math.random() * (max - min + 1) + min );
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector("a.nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget===this);
// });

// document.querySelector("ul.nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector("nav.nav").addEventListener("click", function (e) {
//   e.currentTarget.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget===this);
//   // e.stopPropagation();
// });

// document.body.addEventListener("click", function (e) {
//   e.currentTarget.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

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