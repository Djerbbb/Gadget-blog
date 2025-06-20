const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.slider-next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.querySelector('.slider-prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

const scrollBlocks = document.querySelectorAll('.scroll-ready');

function handleScrollAnimation() {
  const triggerPoint = window.innerHeight * 0.85;

  scrollBlocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    if (blockTop < triggerPoint) {
      block.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
