const hamburger = document.querySelector(".hamburger-menu");
const closedHamburger = document.querySelector(".hamburger-menu-closed");
const ul = document.querySelector("#ul");
const nav = document.querySelector("#nav");
const sliderWrapper = document.querySelector("slider-container");
const slider = document.querySelector(".slider");
const pages = document.querySelector(".pages");
const firstBubble = document.querySelector("#first-bubble");
const secondBubble = document.querySelector("#second-bubble");
const thirdBubble = document.querySelector("#third-bubble");
const fourthBubble = document.querySelector("#fourth-bubble");
const commander = document.querySelector('.commander');
const specialist = document.querySelector('.specialist');
const pilot = document.querySelector('.pilot');
const engineer = document.querySelector('.engineer');
let currentPage = 0;

console.log(commander)
console.log(specialist)

hamburger.addEventListener("click", function () {
  ul.style.visibility = "visible";
  closedHamburger.style.display = "block";
  hamburger.style.display = "none";
  nav.style.background = "rgba(255, 255, 255, 0.04)";
  nav.style.backdropFilter = "blur(40.774227142333984px)";
  nav.style.minHeight = "110%";
  nav.style.height = "auto";
  nav.style.width = "100%";
  nav.style.zIndex = "10";
});

closedHamburger.addEventListener("click", function () {
  ul.style.visibility = "hidden";
  closedHamburger.style.display = "none";
  hamburger.style.display = "block";
  nav.style.background = "none";
  nav.style.backdropFilter = "none";
  hamburger.style.position = "relative";
  hamburger.style.left = "60%";
});


if (commander) {
   firstBubble.classList.add("active");
}
if(specialist) {
  secondBubble.classList.add("active");
} 

if(pilot){
  thirdBubble.classList.add("active");
}

if(engineer){
  fourthBubble.classList.add("active");
}


