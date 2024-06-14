const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

const courses = [
  { name: "Course 1", credits: 3 },
  { name: "Course 2", credits: 4 },
  { name: "Course 3", credits: 2 },
];

const courseListContainer = document.getElementById("course-list");

courses.forEach((course) => {
  const courseElement = document.createElement("div");
  courseElement.textContent = `${course.name} - ${course.credits} credits`;
  courseListContainer.appendChild(courseElement);
});

/*
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
 */
