const resourcesSection = document.getElementById("resources-section");

async function myData() {
  const response = await fetch("data/myjson.json");
  const data = await response.json();
  console.log(data);
  displayResources(data.resources);
}

function displayResources(resources) {
  resources.forEach((resource) => {
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const url = document.createElement("a");
    const type = document.createElement("p");

    title.textContent = `${resource.name}`;
    image.setAttribute("src", resource.picture);
    image.setAttribute("alt", resource.name);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "100%");
    image.setAttribute("height", "100%");

    url.textContent = `Link to Resource`;
    url.setAttribute("href", resource.url);
    url.setAttribute("target", "_blank");

    type.textContent = `${resource.type}`;

    type.style.marginBottom = "36px";

    resourcesSection.appendChild(title);
    resourcesSection.appendChild(image);
    resourcesSection.appendChild(url);
    resourcesSection.appendChild(type);
  });
}

myData();
