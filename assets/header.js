const hamburgerBtn = document.querySelector('.hamburger-btn');
const searchBtn = document.querySelector('.search-btn')
const cartBtn = document.querySelector('.cart-btn')
const navCloseBtn = document.querySelector('.close-btn');
const searchCloseBtn = document.querySelector('.search-close-btn');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const nav = document.querySelector('nav');
const navWrapper = document.querySelector('.nav-wrapper');
const searchWrapper = document.querySelector('.search-wrapper');
const cartWrapper = document.querySelector('.cart-wrapper');
const headerDiv = document.querySelector('header');
const dropdownChild = document.querySelector('.dropdown-child');
const dropdownBtn = document.querySelector('.menu-link:nth-child(2) > a');
console.log(dropdownBtn)

let shrinkHeader = 115;


hamburgerBtn.addEventListener('click', () => toggleElement(navWrapper));
navCloseBtn.addEventListener('click', () => toggleElement(navWrapper));
searchBtn.addEventListener('click', () => toggleElement(searchWrapper));
searchCloseBtn.addEventListener('click', () => toggleElement(searchWrapper));
cartBtn.addEventListener('click', () => toggleElement(cartWrapper));
cartCloseBtn.addEventListener('click', () => toggleElement(cartWrapper));
dropdownBtn.addEventListener('click', function() {
  dropdownChild.classList.toggle('visible')
});


function toggleElement(element) {
  element.classList.toggle('show');
};


navWrapper.addEventListener('click', function(e) {
  if (e.target !== this) return;
  toggleElement(navWrapper);
});

searchWrapper.addEventListener('click', function(e) {
  if (e.target !== this) return;
  toggleElement(searchWrapper);
});

cartWrapper.addEventListener('click', function(e) {
  if (e.target !== this) return;
  toggleElement(cartWrapper);
});


 // header scroll function

 window.addEventListener('scroll', function() {
  const scroll = currentScrollPosition();
  if (scroll >= shrinkHeader) {
    headerDiv.classList.add('smaller');
  } else {
    headerDiv.classList.remove('smaller');
  }
 });

 function currentScrollPosition() {
  return window.scrollY
 };