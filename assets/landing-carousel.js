const slideImg = document.querySelector('.slide-img-container');
const controlButtons = Array.from(document.querySelectorAll('.carousel-control-buttons'));
const backBtn = document.querySelector('.back-button');
const forwardBtn = document.querySelector('.forward-button');

let currentSlide = 0;

backBtn.addEventListener('click, slideForward');
forwardBtn.addEventListener('click, slideBack');

function slideFoward() {
  if (currentSlide === 3) {
    currentSlide = 0;
  } else {
    currentSlide++
  }
  document.querySelector('.active').classList.remove('active');
  controlButtons[currentSlide].classList.add('active');
  moveSlider();
};

