const photos = document.querySelectorAll('.info-img');
const textDetails = document.querySelectorAll('.details');
const hoverText = document.querySelectorAll('.hover-text');
const infoOverlay = document.querySelectorAll('.info-overlay');
const gallery = document.querySelector('.loc-pg-gallery');
const footer = document.querySelector('footer');
const bg = document.createElement('div');
bg.className = "before-footer";
footer.appendChild(bg);



for(let i = 0;i < photos.length; i++) {
  photos[i].addEventListener('mouseover', (e) => {
    infoOverlay[i].classList.toggle('hover');
    hoverText[i].classList.toggle('move-in');
  });

  photos[i].addEventListener('mouseout', (e) => {
    infoOverlay[i].classList.remove('hover');
    hoverText[i].classList.toggle('move-in');
  });
  textDetails[i].addEventListener('mouseover', (e) => {
    infoOverlay[i].classList.toggle('hover');
    hoverText[i].classList.toggle('move-in');
  });

  textDetails[i].addEventListener('mouseout', (e) => {
    infoOverlay[i].classList.remove('hover');
    hoverText[i].classList.toggle('move-in');
  });
}

let galleryHeight = gallery.offsetHeight;
console.log(galleryHeight);
let bgHeight = galleryHeight + 155;
bg.setAttribute('style', `height: ${bgHeight}px`);

window.addEventListener('resize', (e) => {
  let galleryHeight = gallery.offsetHeight;
  let bgHeight = galleryHeight + 155;
  bg.setAttribute('style', `height: ${bgHeight}px`);

});
