import { carouselDots, carouselTrack } from "./dom.js";

let carouselIndex = 0;

function updateCarousel(index) {
  carouselIndex = (index + carouselDots.length) % carouselDots.length;
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;

  carouselDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("bg-white/95", dotIndex === carouselIndex);
    dot.classList.toggle("bg-white/45", dotIndex !== carouselIndex);
  });
}

export function initCarousel() {
  document.getElementById("carousel-prev").addEventListener("click", () => {
    updateCarousel(carouselIndex - 1);
  });

  document.getElementById("carousel-next").addEventListener("click", () => {
    updateCarousel(carouselIndex + 1);
  });

  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateCarousel(index));
  });
}
