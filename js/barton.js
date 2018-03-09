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
    if(schedule.contains(headline)) {
      schedule.removeChild(headline);
      menus.insertBefore(headline, menus.childNodes[0]);
    }

  } else if (width < 1024) {
    if(menus.contains(headline)) {
      menus.removeChild(headline);
      schedule.insertBefore(headline, schedule.childNodes[0]);
    }

  }

});


const d = new Date();
const weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];

const day = document.querySelectorAll(`.${n}`);
const clock = document.querySelector('.clock');
let margin;
if(d.getDay() == 0) {
  margin = 30*(6) + 5;
} else {
  margin = 30*(d.getDay() - 1) + 5;
}
clock.setAttribute('style', `margin-top: ${margin}px;`);
day[0].setAttribute('style', 'color: #000;');
day[1].setAttribute('style', 'color: #000;');
