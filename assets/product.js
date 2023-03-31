const backBtn = document.querySelector('.back-button');
const forwardBtn = document.querySelector('.forward-button');
const slideImg = document.querySelector('.image-selection');
const controlButtons = Array.from(document.querySelectorAll('.image-selection img'));
const featuredImage = document.querySelector('.featured-image img');

let currentSlide = 0;



backBtn.addEventListener('click', slideBack);
forwardBtn.addEventListener('click', slideForward)

function slideForward() {
  if (currentSlide === controlButtons.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++
  }
  const activeClass = document.querySelector('.active');
  if (activeClass) {
    activeClass.classList.remove('active');
  }
  controlButtons[currentSlide].classList.add('active');
  featuredImage.src = controlButtons[currentSlide].src;
}

function slideBack() {
  if (currentSlide === 0) {
    currentSlide = controlButtons.length - 1;
  } else {
    currentSlide--;
  }
  const activeClass = document.querySelector('.active');
  if (activeClass) {
    activeClass.classList.remove('active');
  }
  controlButtons[currentSlide].classList.add('active');
  featuredImage.src = controlButtons[currentSlide].src;
}

controlButtons.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentSlide = index;
    const activeClass = document.querySelector('.active');
    if (activeClass) {
      activeClass.classList.remove('active');
    }
    img.classList.add('active')
    const imgSrc = img.src;
    featuredImage.src = imgSrc;
  })
})

