const card = document.querySelectorAll(".card");
console.log(card);

for(let i = 0;i < card.length; i++) {
  card[i].addEventListener('mouseover', (e) => {
    
    const overlay = card[i].querySelector('.overlay');
    overlay.classList.toggle('hover');
  });
}

for(let i = 0;i < card.length; i++) {
  card[i].addEventListener('mouseout', (e) => {

    const overlay = card[i].querySelector('.overlay');
    overlay.classList.remove('hover');
  });
}
