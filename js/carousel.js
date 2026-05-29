import { carouselDots, carouselTrack } from "./dom.js";

let carouselIndex = 0;

function updateCarousel(index) {
  if (!carouselTrack || carouselDots.length === 0) {
    return;
  }

  carouselIndex = (index + carouselDots.length) % carouselDots.length;
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;

  carouselDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === carouselIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}

export function initCarousel() {
  const previousButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const carouselViewport = carouselTrack?.parentElement;

  if (!previousButton || !nextButton || !carouselTrack || carouselDots.length === 0) {
    return;
  }

  previousButton.addEventListener("click", () => updateCarousel(carouselIndex - 1));
  nextButton.addEventListener("click", () => updateCarousel(carouselIndex + 1));

  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateCarousel(index));
  });

  if (carouselViewport) {
    let touchStartX = 0;

    carouselViewport.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    carouselViewport.addEventListener("touchend", (event) => {
      const deltaX = event.changedTouches[0].clientX - touchStartX;

      if (Math.abs(deltaX) < 40) {
        return;
      }

      updateCarousel(deltaX < 0 ? carouselIndex + 1 : carouselIndex - 1);
    }, { passive: true });
  }

  updateCarousel(0);
}
