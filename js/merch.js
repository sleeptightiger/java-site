const like = document.querySelector('.like-headline');

width = window.innerWidth;
if(width < 510) {
  like.classList.remove("merch-horizontal-line");
  like.classList.add("merch-horizontal-noline");
} else {
  like.classList.add("merch-horizontal-line");
  like.classList.remove("merch-horizontal-noline");
}

window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width < 510) {
    like.classList.remove("merch-horizontal-line");
    like.classList.add("merch-horizontal-noline");
  } else {
    like.classList.add("merch-horizontal-line");
    like.classList.remove("merch-horizontal-noline");
  }

});
