const urlParams = new URLSearchParams(window.location.search);

document.getElementById("first-name").textContent = urlParams.get("first-name");
document.getElementById("last-name").textContent = urlParams.get("last-name");
document.getElementById("email").textContent = urlParams.get("email");
document.getElementById("mobile").textContent = urlParams.get("mobile");
document.getElementById("business-name").textContent =
  urlParams.get("business-name");
document.getElementById("timestamp").textContent = urlParams.get("timestamp");

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;
