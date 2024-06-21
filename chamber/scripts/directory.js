const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

const icon = document.querySelector("#icon");

const cards = document.querySelector("#cards");

const iconAarray = ["images/grid.svg", "images/list.svg"];

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

async function getMembersData() {
  const response = await fetch("../data/members.json");
  const data = await response.json();
  displayMembers(data.companies);
}

const displayMembers = (companies) => {
  companies.forEach((company) => {
    const card = document.createElement("section");
    const imageCompany = document.createElement("img");
    const address = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const website = document.createElement("a");
    address.textContent = `${company.address}`;
    phoneNumber.textContent = `${company.phonenumber}`;
    website.textContent = `Link to Website`;
    website.setAttribute("href", company.websiteurl);
    website.setAttribute("target", "_blank");
    imageCompany.setAttribute("src", company.image);
    imageCompany.setAttribute("alt", company.name);
    imageCompany.setAttribute("loading", "lazy");
    imageCompany.setAttribute("width", "300");
    imageCompany.setAttribute("height", "300");
    card.appendChild(imageCompany);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    cards.appendChild(card);
  });
};

getMembersData();

// grid - list

function changeView() {
  if (icon.getAttribute("src") == "images/grid.svg") {
    icon.setAttribute("src", "images/list.svg");
    cards.style.display = "block";
  } else {
    icon.setAttribute("src", "images/grid.svg");
    cards.style.display = "grid";
  }
  console.log("clicked");
  cards.setAttribute("display", "block");
}

icon.addEventListener("click", changeView);
