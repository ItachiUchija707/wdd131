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