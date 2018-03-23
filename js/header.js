const header = document.querySelector("header");
const headContainer = header.querySelector(".head-container");
const logo = header.querySelector(".logo-withstar img");
const body = document.querySelector("body");


const height = header.offsetHeight;

console.log(height);


// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky()};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
  if (window.pageYOffset >= height) {
    header.classList.add("sticky");
    headContainer.classList.add("sticky-head");
    logo.style.height = "60px";
    logo.style.width = "65px";
    logo.style.margin = "5px 0";
    body.style.top = "70px";
  } else {
    header.classList.remove("sticky");
    headContainer.classList.remove("sticky-head");
    logo.style.height = "98px";
    logo.style.width = "103px";
    logo.style.margin = "0";
    body.style.top = "0px";
  }
}
