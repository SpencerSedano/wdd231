const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

// Dynamic Course List
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

//Spotlight
async function getMembersData() {
  const response = await fetch("../data/members.json");
  const data = await response.json();
  displayMembers(data.companies);
}

const displayMembers = (companies) => {
  companies.forEach((company) => {
    if (company.membershiplevel == 1) {
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
    }
  });
};

getMembersData();

// Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const forecastTemp = document.querySelectorAll(".forecast-temp");
const forecastIcon = document.querySelectorAll(".forecast-icon");
const forecastDesc = document.querySelectorAll(".forecast-desc");

const lat = 24.22;
const lon = 120.57;

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f0a2ff989829812e748b3b7a3cbba1e9&units=metric`;
const apiUrl5days = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f0a2ff989829812e748b3b7a3cbba1e9&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      DisplayResultsWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function apiFetch5Days() {
  try {
    const response = await fetch(apiUrl5days);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      DisplayResultsForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function DisplayResultsWeather(data) {
  iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  currentTemp.textContent = `${data.main.temp}`;
  captionDesc.textContent = `${data.weather[0].description}`;
  weatherIcon.setAttribute("src", `${iconUrl}`);
}

function DisplayResultsForecast(data) {
  for (let i = 0; i < 3; i++) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;

    forecastTemp[i].textContent = `${data.list[i].main.temp}`;
    forecastDesc[i].textContent = `${data.list[i].weather[0].description}`;
    forecastIcon[i].setAttribute("src", `${iconUrl}`);
  }
}

apiFetch();
apiFetch5Days();

/*
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
 */
