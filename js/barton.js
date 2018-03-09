const headline = document.querySelector('.barton-menu-headline');
const schedule = document.querySelector('.schedule');
const menus = document.querySelector('.breakfast-lunch');

width = window.innerWidth;
if(width > 1024) {
  schedule.removeChild(headline);
  menus.insertBefore(headline, menus.childNodes[0]);
}


window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width > 1024) {
    schedule.removeChild(headline);
    menus.insertBefore(headline, menus.childNodes[0]);
  } else {
    menus.removeChild(headline);
    schedule.insertBefore(headline, schedule.childNodes[0]);
  }

});
