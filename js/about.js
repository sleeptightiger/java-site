const photos = document.querySelectorAll(".img .overlay");
const text = document.querySelectorAll(".text");
const card = document.querySelectorAll(".card");





hoverOverlayToggle = (photos, text, hover) => {
  for(let i = 0;i < photos.length; i++) {
    photos[i].addEventListener('mouseover', (e) => {
      photos[i].classList.toggle(hover);
    });

    photos[i].addEventListener('mouseout', (e) => {
      photos[i].classList.remove(hover);
    });
    text[i].addEventListener('mouseover', (e) => {
      photos[i].classList.toggle(hover);
    });

    text[i].addEventListener('mouseout', (e) => {
      photos[i].classList.remove(hover);
    });
  }
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

findMax = (elem) => {
  let maxHeight = 0;
  for(let i = 0; i < elem.length; i++) {
    if(maxHeight < elem[i].offsetHeight) {
      maxHeight = elem[i].offsetHeight;
    }

  }
  return maxHeight;
}

setHeight = (elem, maxHeight) => {
  for(let i = 0; i < elem.length; i++) {
    let height = `height: ${maxHeight}px;`
    elem[i].setAttribute('style', height);
  }
}

removeHeight = (elements) => {
  for(let i = 0; i < elements.length; i++) {
    elements[i].style.height = null;
  }
}

evenHeights = (className) => {
  const elem = document.querySelectorAll(`.${className}`);
  let maxHeight = findMax(elem);

  setHeight(elem, maxHeight);

  window.addEventListener('resize', (e) => {
    width = window.innerWidth;
    if(width > 768) {
      maxHeight = findMax(elem);
      setHeight(elem, maxHeight);
    } else {
      removeHeight(elem);
    }

  });
}



hoverOverlayToggle(photos, text, 'clear');
// evenHeights("card");


// width = window.innerWidth;
// if(width > 768) {
//   const heights = findHeights(text);
//   const maxHeight = findMax(heights);
//   setHeight(card, maxHeight);
// }
//
