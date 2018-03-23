const nav = document.querySelector('nav');
const hidden = document.querySelector('.hidden-menu');
let innerNav = nav.innerHTML;
const buttons = document.querySelectorAll('.tab button');
const arrows = document.querySelectorAll('.arrow');
const hamburger = document.querySelector('.hamburger');
let modalOpen = false;



responsive = width => {
  if(width <= 875) {
    nav.style.display = 'none';
    hamburger.style.display = 'block';


  } else if(width > 875) {
    if(!modalOpen) {
      hamburger.style.display = 'none';
      nav.style.display = 'block';
    }


  }
}

hide = (elements) => {
  for(let i = 0; i < elements.length; i++) {
    const tab = elements[i].nextElementSibling;
    tab.classList.remove('open-tab');

  }
}

arrowUp = () => {
  for(let i = 0; i < arrows.length; i++) {
    arrows[i].classList.remove('arrow-down');
  }
}

let width = window.innerWidth;
responsive(width);

window.addEventListener('resize', (e) => {
  let width = window.innerWidth;
  responsive(width);
});

hamburger.addEventListener('click', () => {

  // hide(buttons);
  // arrowUp();
  hamburger.classList.toggle('close');
  hidden.classList.toggle('unhide');
  modalOpen = !modalOpen;
  let width = window.innerWidth;
  responsive(width);
});

// for(let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', () => {
//     const tab = buttons[i].nextElementSibling;
//     if(arrows[i].classList.contains('arrow-down')) {
//       arrowUp();
//     } else {
//       arrowUp();
//       arrows[i].classList.toggle('arrow-down');
//     }
//     if(tab.classList.contains('open-tab')) {
//       hide(buttons);
//     } else {
//       hide(buttons);
//       tab.classList.toggle('open-tab');
//     }
//   });
//
// }
