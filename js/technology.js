const hamburger = document.querySelector(".hamburger-menu");
const closedHamburger = document.querySelector(".hamburger-menu-closed");
const ul = document.querySelector("#ul");
const nav = document.querySelector("#nav");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const portHeader = document.querySelector(".port-header");
const portPara = document.querySelector(".port-para");
const newImage = document.querySelector(".new-img");
const capsuleHeader = document.querySelector(".capsule-header");
const capsulePara = document.querySelector(".capsule-para");
const capsuleImage = document.querySelector(".capsule-img");
const launchImage = document.querySelector(".launch-img");
const launchHeader = document.querySelector(".launch-header");
const launchPara = document.querySelector(".launch-para");


console.log(launchPara);
console.log(capsuleImage);
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

if(first){
  first.classList.add("active");
}
first.addEventListener('click', ()=>{
  if(first.textContent === "1"){
    first.classList.add("active");

    launchImage.style.display = "block";
    launchHeader.style.visibility = "visible";
    launchPara.style.display = "block";
    newImage.style.display ="none";
    portHeader.style.display ="none";
    portPara.style.display ="none";
    capsuleImage.style.visibility = "hidden";
    capsuleHeader.style.display = "none";
    capsulePara.style.display = "none";
    second.classList.remove("active");
    third.classList.remove("active");
  }
})

second.addEventListener('click', ()=>{
if(second.textContent === "2"){
  second.classList.add("active");
  newImage.style.display ="block";
  portHeader.style.display ="block";
  portPara.style.display ="block";
 launchImage.style.display = "none";
 launchHeader.style.visibility = "hidden";
 launchPara.style.display = "none";
 capsuleImage.style.visibility = "hidden";
 capsuleHeader.style.display = "none";
 capsulePara.style.display = "none";
first.classList.remove("active");
third.classList.remove("active");

}
})

third.addEventListener('click', ()=>{
if(third.textContent === "3"){
  third.classList.add("active");
  first.classList.remove("active");
  second.classList.remove("active");
  capsuleImage.style.visibility= "visible";
  capsuleHeader.style.display = "block";
  capsulePara.style.display = "block";
  newImage.style.display ="none";
  portHeader.style.display ="none";
  portPara.style.display ="none";
  launchImage.style.display = "none";
  launchHeader.style.visibility = "hidden";
  launchPara.style.display = "none";

}
})