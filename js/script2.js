
const hamburger = document.querySelector(".hamburger-menu")
const closedHamburger = document.querySelector(".hamburger-menu-closed")
const ul = document.querySelector("#ul")
const nav = document.querySelector("#nav")

console.log(hamburger)
console.log(nav)
console.log(closedHamburger)
hamburger.addEventListener("click", function(){
  ul.style.visibility = "visible";
  closedHamburger.style.display = "block";
  hamburger.style.display = "none";
  nav.style.background = "rgba(255, 255, 255, 0.04)";
  nav.style.backdropFilter = "blur(40.774227142333984px)";
  nav.style.minHeight = "110%";
  nav.style.height = "auto";
  nav.style.width = "100%";
  nav.style.zIndex = "10";
})

closedHamburger.addEventListener("click", function(){
  ul.style.visibility = "hidden";
  closedHamburger.style.display = "none";
  hamburger.style.display = "block";
  nav.style.background = "none";
  nav.style.backdropFilter = "none";
  hamburger.style.position = "relative";
  hamburger.style.left = "60%";
})
 



    

   
