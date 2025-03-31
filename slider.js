const slider = document.getElementById("slider");
const slides = {
  1: document.getElementById("id"),
  2: document.getElementById("ego"),
  3: document.getElementById("superego")
};

function showSlide(value) {
  for (const key in slides) {
    slides[key].style.display = "none";
    slides[key].style.opacity = 0;
  }

  const selectedSlide = slides[value];
  selectedSlide.style.display = "block";
  setTimeout(() => {
    selectedSlide.style.opacity = 1;
  }, 50);
}

showSlide(slider.value);

slider.addEventListener("input", function () {
  showSlide(slider.value);
});
