// ==== Menú ====
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('show');
  });
});

// ==== Carrusel manual ====
let currentIndex = 0;
const slide = document.getElementById('slide');
if (slide) {
  const images = slide.querySelectorAll('img');
  const totalSlides = images.length;

  function updateSlide() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  setInterval(nextSlide, 5000);
}

// ==== Animaciones al hacer scroll ====
const animElements = document.querySelectorAll('.fade-in, .slide-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

animElements.forEach(el => observer.observe(el));

// ==== Carrusel automático infinito (horizontal) ====
const slider = document.getElementById("slider-auto");
if (slider) {
  slider.innerHTML += slider.innerHTML; // duplicamos para efecto bucle

  let scrollAmount = 0;
  const speed = 1; // velocidad de desplazamiento
  const maxScroll = slider.scrollWidth / 2;

  function autoScroll() {
    scrollAmount += speed;
    if (scrollAmount >= maxScroll) scrollAmount = 0;
    slider.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
  }

  requestAnimationFrame(autoScroll);
}