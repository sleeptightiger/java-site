const header = document.querySelector("header");
const headContainer = header.querySelector(".head-container");
const logo = header.querySelector(".logo-withstar img");
const body = document.querySelector("body");
const indexBody = document.querySelector(".index");
const diagonal = document.querySelector(".diagonal-bg");


const height = header.offsetHeight;

console.log(indexBody);


// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky()};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
  if (window.pageYOffset > height) {
    header.classList.add("sticky");
    headContainer.classList.add("sticky-head");
    logo.style.height = "60px";
    logo.style.width = "65px";
    logo.style.margin = "5px 0";
    console.log(modalOpen);
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
    diagonal.style.height = "780px"
  }
}
