const header = document.querySelector("header");
const headContainer = header.querySelector(".head-container");
const logo = header.querySelector(".logo-withstar img");
const body = document.querySelector("body");
const indexBody = document.querySelector(".index");
const diagonal = document.querySelector(".diagonal-bg");


const height = header.offsetHeight;
width = window.innerWidth;
if(width > 875) {
  window.onscroll = function() {sticky()};
}

window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  if(width > 875) {
    if (window.pageYOffset > height) {
      header.classList.add("sticky");
      headContainer.classList.add("sticky-head");
      logo.style.height = "60px";
      logo.style.width = "65px";
      logo.style.margin = "5px 0";
      if(indexBody == null) {
        body.style.marginTop = "86px";
      } else {
        body.style.marginTop = "57px";
        diagonal.style.height = "665px"
      }


      // header.style.display = "none";
    } else {
      header.classList.remove("sticky");
      headContainer.classList.remove("sticky-head");
      logo.style.height = "98px";
      logo.style.width = "103px";
      logo.style.margin = "0";
      body.style.marginTop = "0px";
      if(indexBody != null) {
        diagonal.style.height = "780px";
      }

    }
    window.onscroll = function() {sticky()};
  } else {
    header.classList.remove("sticky");
    headContainer.classList.remove("sticky-head");
    logo.style.height = "98px";
    logo.style.width = "103px";
    logo.style.margin = "0";
    body.style.marginTop = "0px";
    if(indexBody != null) {
      diagonal.style.height = "780px";
    }
  }
});



function sticky() {
  let width = window.innerWidth;
  // console.log(width);
  if (width > 875) {
    if (window.pageYOffset > height) {
      header.classList.add("sticky");
      headContainer.classList.add("sticky-head");
      logo.style.height = "60px";
      logo.style.width = "65px";
      logo.style.margin = "5px 0";
      if(indexBody == null) {
        body.style.marginTop = "86px";
      } else {
        body.style.marginTop = "57px";
        diagonal.style.height = "665px"
      }


      // header.style.display = "none";
    } else {
      header.classList.remove("sticky");
      headContainer.classList.remove("sticky-head");
      logo.style.height = "98px";
      logo.style.width = "103px";
      logo.style.margin = "0";
      body.style.marginTop = "0px";
      if(indexBody != null) {
        diagonal.style.height = "780px";
      }

    }
  }

}



const drop = document.querySelectorAll(".dropdown");
const parent3 = document.querySelectorAll(".parent3");
const parent1 = document.querySelectorAll(".parent1");


for(let i = 0; i < drop.length; i++) {
  drop[i].addEventListener('mouseover', (e) => {

    parent3[i].style.display = "block";

    setTimeout(function () {
      parent3[i].style.transform = "rotateX(0deg)";
      parent3[i].style.opacity = "1";
      parent3[i].style.zIndex = "100";
      // parent1[i].style.opacity = "1";
    }, 4);


  });

  drop[i].addEventListener('mouseleave', (e) => {
    parent3[i].style.transform = "rotateX(-25deg)";
    // parent1[i].style.zIndex = "-1";
    // parent3[i].style.opacity = "0";
    setTimeout(function () {
      parent3[i].style.opacity = "0";
      // parent1[i].style.opacity = "0";
    }, 50);
    setTimeout(function () {
      parent3[i].style.display = "none";
    }, 200);


  });
}




// $('button').on('click', function () {
//
//   if (box.hasClass('hidden')) {
//
//     box.removeClass('hidden');
//     setTimeout(function () {
//       box.removeClass('visuallyhidden');
//     }, 20);
//
//   } else {
//
//     box.addClass('visuallyhidden');
//
//     box.one('transitionend', function(e) {
//
//       box.addClass('hidden');
//
//     });
//
//   }
//
// });
