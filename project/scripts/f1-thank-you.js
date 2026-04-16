function setTheme(themeId) {
    const buttons = document.querySelectorAll(".team-selector button");
    if (themeId) {
        document.body.className = themeId;
    }

    else {
        document.body.className = "";
    }

    if (themeId && themeId !== "default") {
        localStorage.setItem("favorite-theme", themeId);
    }

    else {
        localStorage.removeItem("favorite-theme")
    }

    const currentTheme = themeId || "default";
    buttons.forEach(button => 
        {if (button.id == currentTheme)
            {button.setAttribute("aria-pressed", "true")}
        else {
            button.setAttribute("aria-pressed", "false")
        }
        }
    );}

function getTheme() {
    return localStorage.getItem("favorite-theme");
}

window.addEventListener("DOMContentLoaded", () => { 
    const navigationMenu = document.querySelector("nav");
    const menuButton = document.querySelector(".Menu");
    const savedTheme = getTheme();
    const today = new Date();
    const year = today.getFullYear();
    setTheme(savedTheme);
    document.querySelector("#lastModified").innerHTML = document.lastModified;
    document.querySelector("#currentyear").textContent = year;
    
    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            menuButton.setAttribute("aria-expanded", "false");
        }
        else {
            menuButton.setAttribute("aria-expanded", "true");
        }

        menuButton.classList.toggle("Close");
    })
    menuButton.addEventListener("click", () => navigationMenu.classList.toggle("hide"));
})
    