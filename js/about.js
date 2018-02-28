const photos = document.querySelectorAll(".img .overlay");
const text = document.querySelectorAll(".text");
const card = document.querySelectorAll(".card");



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


findHeights = (elements) => {
  const heights = [];
  for(let i = 0; i < elements.length; i++) {
    const children = elements[i].children;
    let height = 0;
    for(let j = 0; j < children.length; j++) {
      height += children[j].clientHeight;
    }
    heights.push(height);
  }
  return heights;
}

findMax = (heights) => {
  let max = 0;
  for(let i = 0; i < heights.length; i++) {
    if(max < heights[i]) {
      max = heights[i];
    }
  }
  return max;
}

findMin = (heights) => {
  let min = heights[0];
  for(let i = 0; i < heights.length; i++) {
    if(min > heights[i]) {
      min = heights[i];
    }
  }
  return min;
}

setHeight = (elements, height) => {
  let thisHeight = height + 70;
  for(let i = 0; i < elements.length; i++) {
    let set = 'height:' + thisHeight + 'px;';
    elements[i].setAttribute('style', set);
  }
}

removeHeight = (elements) => {
  for(let i = 0; i < elements.length; i++) {
    elements[i].style.height = null;
  }
}



width = window.innerWidth;
if(width > 768) {
  const heights = findHeights(text);
  const maxHeight = findMax(heights);
  setHeight(card, maxHeight);
}

window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width > 768) {
    const heights = findHeights(text);
    const maxHeight = findMax(heights);
    setHeight(card, maxHeight);
  } else {
    removeHeight(card);
  }

});
