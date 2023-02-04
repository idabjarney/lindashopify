const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('nav');
const navWrapper = document.querySelector('.nav-wrapper');

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