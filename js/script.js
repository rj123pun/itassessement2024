
function validateForm() {
  const email = document.forms["contactForm"]["email"].value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
