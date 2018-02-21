const card = document.querySelectorAll(".card");
console.log(card);

for(let i = 0;i < card.length; i++) {
  card[i].addEventListener('mouseover', (e) => {
    console.log('hoorah!!');
    const overlay = card[i].querySelector('.overlay');
    overlay.classList.toggle('hover');
  });
}

for(let i = 0;i < card.length; i++) {
  card[i].addEventListener('mouseout', (e) => {
    console.log('hoorah!!');
    const overlay = card[i].querySelector('.overlay');
    overlay.classList.remove('hover');
  });
}
