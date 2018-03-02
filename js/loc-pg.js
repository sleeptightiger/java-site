const photos = document.querySelectorAll('.info-img');
const textDetails = document.querySelectorAll('.details');
const hoverText = document.querySelectorAll('.hover-text');
const infoOverlay = document.querySelectorAll('.info-overlay');



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
