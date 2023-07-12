/*HamBurger Btn handler*/
const navBurger = document.getElementById("nav_burger_button");
const navContainer = document.getElementById("nav_container");
// select all single mac-frame
var Projects = document.querySelectorAll(".Project_col_2");
var singleProjects = document.querySelectorAll(".Single_Project");
// select nav and window_width variables.
let window_resize_width = window.innerWidth;
const nav_container = document.querySelector(".nav_container");
const nav_link = document.querySelector(".nav_links");
// Find which section you are viewing.
// select all section
const sections = document.querySelectorAll("section");

window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;
  window_resize_width = windowWidth;
  if (windowWidth <= 500) {
    // In Case the window resize while the nav_sidebar was on
    nav_container.classList.remove("nav_container_sidebar");
    nav_link.classList.remove("nav_links_sidebar");
  }
});
navBurger.addEventListener("click", () => {
  // using toggle to display nav links when screen get smaller
  navContainer.classList.toggle("active");
});
var lastScrollPosition = window.scrollY;
// add window scroll ADL
window.addEventListener("scroll", function () {
  // determine where you are from Top to bottom of this website
  const currentPosition = window.scrollY;
  // determine mac-frame Scroll when it transformY
  sections.forEach(function (section) {
    const sectionId = section.getAttribute("id");
    // figure out the starting point of each sections.
    let sectionTop = section.offsetTop + 100;
    // figure out the end point of each section
    const sectionBottom = sectionTop + section.offsetHeight;
    // if currentPostion of scrolling enter into any section , it will get trigger
    if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
      console.log("You are currently viewing: " + sectionId);
      console.log(window_resize_width);
      if (sectionId == "Project" && window_resize_width >= 500) {
        nav_container.classList.add("nav_container_sidebar");
        nav_link.classList.add("nav_links_sidebar");
      }
      if (sectionId == "Home") {
        nav_container.classList.remove("nav_container_sidebar");
        nav_link.classList.remove("nav_links_sidebar");
      }
    }
  });
});
