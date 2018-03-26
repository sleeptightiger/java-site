const headline = document.querySelector('.coffee-shop-headline');
width = window.innerWidth;
if(width < 768) {
  headline.classList.add("horizontal-line-headline");
  headline.style.marginTop = "0px";

}
window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width < 768) {
    headline.classList.add("horizontal-line-headline");

  } else {
    headline.classList.remove("horizontal-line-headline");

  }

});
