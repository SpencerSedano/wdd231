const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const now = Date.now();
  const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    visitMessage.textContent = `You last visited 1 day ago.`;
  } else {
    visitMessage.textContent = `You last visited ${daysPassed} days ago.`;
  }
} else {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit", Date.now());
