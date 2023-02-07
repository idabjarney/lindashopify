const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('nav');
const navWrapper = document.querySelector('.nav-wrapper');
const headerDiv = document.querySelector('header');

let shrinkHeader = 115;

hamburgerBtn.addEventListener('click', function() {
  navWrapper.classList.remove('hidden');
  console.log('click');
});

navWrapper.addEventListener('click', function(e) {
  console.log(e.target, this)
  if (e.target !== this) {
    return;
  }
  navWrapper.classList.add('hidden');
});

 closeBtn.addEventListener('click', function () {
  navWrapper.classList.add('hidden');
 })

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