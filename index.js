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

const elementInView = (el, offset, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight - offset || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

//stats-animation
window.addEventListener("scroll", () => {
  var stat_container = document.querySelector(".stats-container");
  var stat_covers = document.querySelectorAll(".stat-cover");
  if (elementInView(stat_container, 120)) {
    stat_covers.forEach((stat_cover) => {
      stat_cover.classList.add("translate100");
    });
  }
});

//title-animation
window.addEventListener("scroll", () => {
  var project_titles = document.querySelectorAll(".project-title-container");
  var title_covers = document.querySelectorAll(".title-cover");

  project_titles.forEach((project_title) => {
    if (elementInView(project_title, 120)) {
      let elem = project_title.querySelector(".title-cover");
      elem.classList.add("translate100");
    }
  });
});

//projects-animation
window.addEventListener("scroll", () => {
  var project_container = document.querySelector(".projects-container");
  var projects = document.querySelectorAll(".project-image");
  if (elementInView(project_container, 220)) {
    projects.forEach((project) => {
      project.classList.add("translate0");
    });
  }
});

window.addEventListener("scroll", () => {
  var services_container = document.querySelector(".services");
  var services = document.querySelectorAll(".service h5");
  if (elementInView(services_container, 400)) {
    services.forEach((service) => {
      service.classList.add("translate0");
    });
  }
});
