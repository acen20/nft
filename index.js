var hamburger = document.querySelector(".hamburger");
var navlinks = document.querySelector(".nav-links");
var body = document.querySelector("body");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("condense");
  body.classList.toggle("disablePointer");
  navlinks.classList.toggle("display");
});
var list_items = document.querySelectorAll("li");
for (var i = 0; i < list_items.length; i++) {
  list_items[i].addEventListener("click", function () {
    hamburger.click();
  });
}
var elem = document.querySelectorAll("input,textarea");

for (var i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", function (e) {
    var element = e.target;
    element.style.background = "var(--color-red)";
  });
}
