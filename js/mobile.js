const nav = document.querySelector('nav');
let innerNav = nav.innerHTML;
console.log(nav);

const ham = `
  <div class="hamburger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
`;

responsive = width => {
  if(width <= 768) {
    nav.innerHTML = '';
    nav.innerHTML = ham;



  } else if(width > 768) {
    console.log("Not Here!");
    nav.innerHTML = innerNav;
  }
}

const width = window.innerWidth;
responsive(width);

window.addEventListener('resize', (e) => {
  const width = window.innerWidth;
  responsive(width);
});

nav.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('close');
});
