const slideImg = document.querySelector('.slide-img-container');
const controlButtons = Array.from(document.querySelectorAll('.carousel-control-buttons button'));
const backBtn = document.querySelector('.back-button');
const forwardBtn = document.querySelector('.forward-button');

let currentSlide = 0;

backBtn.addEventListener('click', slideBack);
forwardBtn.addEventListener('click', slideForward);

function slideForward() {
  console.log('click')
  if (currentSlide === 3) {
    currentSlide = 0;
  } else {
    currentSlide++
  }
  document.querySelector('.active').classList.remove('active');
  controlButtons[currentSlide].classList.add('active');
  moveSlider();
}

function slideBack() {
  if (currentSlide === 0) {
  currentSlide = 3;
  } else {
    currentSlide--;
  }
  document.querySelector('.active').classList.remove('active');
  controlButtons[currentSlide].classList.add('active');
  moveSlider();
}

controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    document.querySelector('.active').classList.remove('active');
    button.classList.add('active')
    moveSlider();
  })
})

function moveSlider() {
  slideImg.style.transform = `translateX(-${currentSlide * 25}%)`
}