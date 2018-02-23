const photos = document.querySelectorAll(".img");
const text = document.querySelectorAll(".text");

for(let i = 0;i < photos.length; i++) {
  photos[i].addEventListener('mouseover', (e) => {
    photos[i].classList.toggle('clear');
  });

  photos[i].addEventListener('mouseout', (e) => {
    photos[i].classList.remove('clear');
  });
  text[i].addEventListener('mouseover', (e) => {
    photos[i].classList.toggle('clear');
  });

  text[i].addEventListener('mouseout', (e) => {
    photos[i].classList.remove('clear');
  });
}
