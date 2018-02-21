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
    const svg = pointers[i].querySelector('svg');
    const path = svg.querySelector('path');
    if(i == pointers.length - 1) {
      const poly = svg.querySelector('polygon');
      poly.setAttribute('fill', '#000');
    } else {
      path.setAttribute('fill', '#000');
    }
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  const svg = pointers[slideIndex-1].querySelector('svg');
  const path = svg.querySelector('path');
  if(slideIndex == pointers.length) {
    const poly = svg.querySelector('polygon');
    poly.setAttribute('fill', '#E39049');
  } else {
    path.setAttribute('fill', '#E39049');
  }


}
