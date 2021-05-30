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
    
    const navBar = document.querySelector("nav.nav");
    
    // const handleHover = function (event, opacity) {
      const handleHover = function (event) {
        // console.log(this);
        // console.log(event.currentTarget);
        if (event.target.classList.contains("nav__link")) {
          const navLink = event.target;
          const bankLogo = navLink.closest(".nav").querySelector("img");
          const siblings = navLink.closest(".nav").querySelectorAll("a.nav__link");
          
          siblings.forEach(function (node) {
            if (node !== event.target) {
              node.style.opacity = this;
            };
          }, this);
          bankLogo.style.opacity = this;
        };
      }
      
      // navBar.addEventListener("mouseover", function (e) {
        //   handleHover(e, 0.5);
        // });
        navBar.addEventListener("mouseover", handleHover.bind(0.5));
        
        navBar.addEventListener("mouseout", handleHover.bind(1)
        
        // if (event.target.classList.contains("nav__link")) {
          //   const navLink = event.target;
          //   const bankLogo = navLink.closest(".nav").querySelector("img");
          //   const siblings = navLink.closest(".nav").querySelectorAll("a.nav__link");
          
          //   siblings.forEach(function (node) {
            //     if (node !== event.target) {
              //       node.style.opacity = 1;
              //     };
              //   });
              //   bankLogo.style.opacity = 1;
              // };
              );
              
              const header = document.querySelector("header.header")
              // console.log(header);
              // console.log(navBar.getBoundingClientRect());
              
              const stickyNav = function (entries) {
                entries.forEach(function (entry) {
                  // const [entry] = entries;
                  // console.log(entry);
                  if (!entry.isIntersecting) {
                    navBar.classList.add("sticky");
                  } else {
                    navBar.classList.remove("sticky");
                  };
                });
              };
              
              const headerObsObject = {
                root: null,
                threshold: 0,
                rootMargin: `-${navBar.getBoundingClientRect().height}px`,
              }
              const headerObserver = new IntersectionObserver(stickyNav, headerObsObject);
              headerObserver.observe(document.querySelector("header.header"));
              
              const allSections = document.querySelectorAll("section.section");
              
              const showSection = function (entries, observer) {
                const [entry] = entries;
                // console.log(entry);
                if (!entry.isIntersecting) return;
                entry.target.classList.remove("section--hidden");
                // console.log(observer);
                observer.unobserve(entry.target);
              };
              
              const sectionObject = {
                root: null,
                threshold: 0.2,
              };
              
              const sectionObserver = new IntersectionObserver(showSection, sectionObject);
              
              allSections.forEach(function (section) {
                section.classList.add("section--hidden");
                sectionObserver.observe(section);
              });
              
              const allLazyImgs = document.querySelectorAll("img[data-src]");
              
              const lazyImgLoader = function (entries, observer) {
                const [entry] = entries;
                // console.log(entry);
                if (!entry.isIntersecting) return;
                entry.target.src = entry.target.dataset.src;
                entry.target.addEventListener("load", function () {
                  entry.target.classList.remove("lazy-img");
                });
                observer.unobserve(entry.target);
              };
              
              const lazyImgObj = {
                root: null,
                threshold: 0.5,
                rootMargin: '-100px'
              };
              
              const lazyImgObserver = new IntersectionObserver(lazyImgLoader, lazyImgObj);
              
              allLazyImgs.forEach(function (lazyImg) {
                lazyImgObserver.observe(lazyImg);
              })
              
              const slides = document.querySelectorAll("div.slide");
              let currentSlideIndex = 0;
              
              const btnLeft = document.querySelector("button.slider__btn--left");
              const btnRight = document.querySelector("button.slider__btn--right");
  
  const dotContainer = document.querySelector("div.dots");
  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML("beforeend",
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };
                            
  createDots();          
                
  const activateDots = function (currentSlideIndex) {
    dotContainer.querySelectorAll("button.dots__dot").forEach(function (dot) {
      dot.classList.remove("dots__dot--active");
    });
    dotContainer.querySelector(
      `button.dots__dot[data-slide="${currentSlideIndex}"]`
    ).classList.add("dots__dot--active");
  };
              
  const goToNextSlide = function (currentSlideIndex) {
    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${(index - currentSlideIndex) * 100}%)`;
    });

    activateDots(currentSlideIndex);
  }
                   
  goToNextSlide(0);  // on page load show first image.  Replace above code
                
  const nextSlide = function () {
    if (currentSlideIndex === slides.length - 1) {
      currentSlideIndex = 0;
    } else {
    currentSlideIndex++;
    };
                  
    goToNextSlide(currentSlideIndex);  
  }
                
  const prevSlide = function () {
    if (currentSlideIndex === 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex--;
    };
                  
    goToNextSlide(currentSlideIndex);
  }
                
  btnRight.addEventListener("click", nextSlide);
                
  btnLeft.addEventListener("click", prevSlide);
                
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();
    };
    event.key === "ArrowLeft" && prevSlide();
  });
                
  dotContainer.addEventListener("click", function (event) {
    if ( event.target.classList.contains("dots__dot") ) {
      const { slide } = event.target.dataset;
      goToNextSlide(slide);    
    };
  });
                  
  
// window.addEventListener("load", function (event) {
//   console.log("Load: Page fully loaded");
//   console.log(event);
// });
  
// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log("DOM ContentLoaded: HTML Parsed and DOM Tree Parsed");
//   console.log(event);
// });

// window.addEventListener("beforeunload", function (event) {
//   // event.preventDefault();
//   console.log(event);
//   event.returnValue = "";
// })
                  // allDots.forEach(function (dot) {
                    //   dot.addEventListener("click", function () {
                      //     console.log(dot.dataset.slide);
                      //     goToNextSlide(dot.dataset.slide);
                      //   });
                      // });
                      
                      // console.log(document.querySelector("section#section--3"));
                      
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