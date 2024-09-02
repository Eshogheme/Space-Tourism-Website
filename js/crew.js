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
let currentPage = 0;

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

function goToPage(pageNumber) {
  currentPage = pageNumber;

  //to swipe on the horizontal plane. If swiping left, the current page will be negative and when swiping right it'd be positive.
  slider.style.transform = `translateX(-${currentPage * 100}%)`;
}
let startX;
let stopX;
if (currentPage === 0) {
  firstBubble.classList.add("active");
  secondBubble.classList.remove("active");
  thirdBubble.classList.remove("active");
  fourthBubble.classList.remove("active");
} else if (currentPage === 1) {
  secondBubble.classList.add("active");
  firstBubble.classList.remove("active");
  thirdBubble.classList.remove("active");
  fourthBubble.classList.remove("active");
} else if (currentPage === 2) {
  thirdBubble.classList.add("active");
  firstBubble.classList.remove("active");
  secondBubble.classList.remove("active");
  fourthBubble.classList.remove("active");
} else if (currentPage === 3) {
  fourthBubble.classList.add("active");
  firstBubble.classList.remove("active");
  secondBubble.classList.remove("active");
  thirdBubble.classList.remove("active");
}else{
  console.log("page wasn't noved at all")
}
slider.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function (e) {
  stopX = e.changedTouches[0].clientX;

  if (startX > stopX + 50) {
    // Swipe left
    if (currentPage < pages.length - 1) goToPage(currentPage + 1);
  } else if (startX < stopX - 50) {
    // Swipe right
    if (currentPage > 0) goToPage(currentPage - 1);
  }
});
