'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section")
// console.log(allSections);

// const sectionOne = document.querySelector("#section--1");
// const sectionOne = document.getElementById("section--1");
// console.log(sectionOne);

// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// const allSections = document.getElementsByClassName("section");
// console.log(allSections);

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.className = "cookie-message cookie-message1";
message.id = "cookie"

// message.textContent = "We use cookies for imporved functionality and analytics.";
message.innerHTML = "We use cookies for imporved functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";
header.append(message);
// header.after(message)

const cookieButton = document.querySelector(".btn--close--cookie");
cookieButton.addEventListener("click", function () {
  // message.parentElement.removeChild(message);
  message.remove();
});