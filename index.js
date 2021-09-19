var hamburger = document.querySelector(".hamburger");
var navlinks = document.querySelector(".nav-links");
var body = document.querySelector("body");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("condense");
  body.classList.toggle("disablePointer");
  navlinks.classList.toggle("display");
});
