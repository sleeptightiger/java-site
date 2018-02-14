let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const pointers = document.getElementsByClassName("pointer");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  for(let i = 0; i < pointers.length; i++) {
    pointers[i].className = pointers[i].className.replace(" selected", "");
    pointers[i].setAttribute("src", "img/blackpointer.svg");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  pointers[slideIndex-1].className += " selected";
  pointers[slideIndex-1].setAttribute("src", "img/orangepointer.svg");
}
