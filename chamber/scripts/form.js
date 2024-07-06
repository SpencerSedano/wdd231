const membershipInfo = document.querySelector("#membership-info");
const modal = document.querySelector("[data-modal]");

const timeStamp = document.querySelector("#timestamp");

membershipInfo.addEventListener("click", () => {
  modal.showModal();
});

timeStamp.value = new Date().toISOString();

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;
