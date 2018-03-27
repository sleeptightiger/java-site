const headline = document.querySelector('.coffee-shop-headline');
width = window.innerWidth;
const diagonalBg = document.querySelector('.bg-lower-store');
if(width < 768) {
  headline.classList.add("horizontal-line-headline");
  headline.style.marginTop = "0px";
  diagonalBg.style.display = 'none';

}
window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width < 768) {
    headline.classList.add("horizontal-line-headline");
    diagonalBg.style.display = 'none';
  } else {
    headline.classList.remove("horizontal-line-headline");
    diagonalBg.style.display = 'block';
  }

});
