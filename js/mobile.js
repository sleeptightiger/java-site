const nav = document.querySelector('nav');
const hidden = document.querySelector('.hidden-menu');
let innerNav = nav.innerHTML;
const buttons = document.querySelectorAll('.tab button');

const ham = `
  <div class="hamburger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
`;

responsive = width => {
  if(width <= 875) {
    nav.innerHTML = '';
    nav.innerHTML = ham;



  } else if(width > 875) {
    nav.innerHTML = innerNav;
  }
}

hide = (elements) => {
  for(let i = 0; i < elements.length; i++) {
    const tab = elements[i].nextElementSibling;
    tab.classList.remove('open-tab');
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
  hide(buttons);
  hamburger.classList.toggle('close');
  hidden.classList.toggle('unhide');
});

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    const tab = buttons[i].nextElementSibling;
    if(tab.classList.contains('open-tab')) {
      hide(buttons);
    } else {
      hide(buttons);
      tab.classList.toggle('open-tab');
    }
  });

}
