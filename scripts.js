document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  // Set the initial active slide
  slides[index].classList.add('active');

  function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);
});
