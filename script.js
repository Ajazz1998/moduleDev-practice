const testimonialCarouselContainer = document.querySelectorAll('.client-testimonial-item');
const carouselSwitch = document.querySelectorAll('.client-testimonial-switch');

let carouselCounter = 1;
showContainer(carouselCounter);

function currentContainer(n) {
  showContainer(carouselCounter = n);
}

function showContainer(n) {

  for (let i = 0; i < testimonialCarouselContainer.length; i++) {
    testimonialCarouselContainer[i].style.display = 'none';
    testimonialCarouselContainer[i].classList.remove('fast-fade-in-left');
    carouselSwitch[i].classList.remove('active-carousel-switch');
  }

  if (carouselCounter > testimonialCarouselContainer.length) {
    carouselCounter = 1;
  }

  testimonialCarouselContainer[carouselCounter - 1].style.display = 'block';
  testimonialCarouselContainer[carouselCounter - 1].classList.add('fast-fade-in-left');
  carouselSwitch[carouselCounter - 1].classList.add('active-carousel-switch');

  carouselCounter++;
  setTimeout(showContainer, 30000);

}

carouselSwitch.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainer(i + 1);
  });
});

document.getElementById("bar").addEventListener("click", () => {
  const mainNav = document.getElementById("topnav");
  const nav = document.getElementById("nav");

  if(mainNav.style.display === "none"){
    mainNav.style.display = "block";
    nav.style.height = "29vh"
  }else{
    mainNav.style.display = "none"
    nav.style.height = "8vh"
  }
})
