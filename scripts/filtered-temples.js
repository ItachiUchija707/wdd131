const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Alabang Philippines",
    location: "Muntinlupa City, Philippines",
    dedicated: "2026, January, 18",
    area: 35998,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg"
  },
  {
    templeName: "Harare Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2026, March, 01",
    area: 17247,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-67717-main.jpg"
  },
  {
    templeName: "Davao Philippines",
    location: "Davao City, Philippines",
    dedicated: "2026, March, 03",
    area: 18450,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-69513-main.jpg"
  }
];

const menuButton = document.querySelector("button");
const navigationMenu = document.querySelector("nav");
const today = new Date();
const year = today.getFullYear();

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigationMenu.classList.toggle("hide");
})

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

function createTempleCard(filteredTemples) {
    document.querySelector(".cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400")
        img.setAttribute("height", "200")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".cards").appendChild(card);
    })
}

document.querySelector(".old").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900))
})

document.querySelector(".new").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000))
})

document.querySelector(".large").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000))
})

document.querySelector(".small").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000))
})

document.querySelector(".home").addEventListener("click", () => createTempleCard(temples));
createTempleCard(temples);