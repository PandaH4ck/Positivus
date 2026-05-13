let offset = 0;
const sliderLine = document.querySelector(".testimonials");
let sliderNext = document.querySelector(".slider-next");
let sliderBack = document.querySelector(".slider-back");
const step = 656;

sliderNext.addEventListener("click", function () {
  offset += step;

  if (offset > step) {
    offset = -step;
  }

  sliderLine.style.transform = `translateX(${-offset}px)`;
});

sliderBack.addEventListener("click", function () {
  offset -= step;

  if (offset < -step) {
    offset = step;
  }

  sliderLine.style.transform = `translateX(${-offset}px)`;
});
