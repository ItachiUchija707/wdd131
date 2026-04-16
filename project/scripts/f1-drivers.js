const f1News = [
    {
        author: "Formula 1",
        title: 'FIA reports "constructive dialogue" on F1 2026 tweaks, outlines decision timeline"',
        newsUrl: "https://www.motorsport.com/f1/news/fia-reports-constructive-dialogue-on-f1-2026-tweaks-outlines-decision-timeline/10811803/",
        imageUrl: "https://cdn-8.motorsport.com/images/amp/YP7rVg42/s300/race-start.webp",
        alt: "F1 start of the race, cars fighting for positions before first curve"
    }, 
    {
        author: "AUTOSPORT",
        title: 'Lambiase’s move to McLaren makes sense - but Red Bull faces another big hole to fill',
        newsUrl: "https://www.autosport.com/f1/news/lambiases-move-to-mclaren-makes-sense-but-red-bull-faces-another-big-hole-to-fill/10811749/",
        imageUrl: "https://cdn-8.motorsport.com/images/amp/Y99ebaPY/s300/gianpiero-lambiase-race-engine.webp",
        alt: "Max Verstappen and his race engineer Lambiase celebrating a podium"
    }, 
    {
        author: "Formula 1",
        title: 'Martin Brundle delivers blunt verdict on Max Verstappen retirement threats',
        newsUrl: "https://www.motorsport.com/f1/news/martin-brundle-delivers-blunt-verdict-on-max-verstappen-retirement-threats/10811648/",
        imageUrl: "https://cdn-1.motorsport.com/images/amp/0R7wbbM2/s300/max-verstappen-red-bull-racing.webp",
        alt: "Max verstappen in his Red Bull Indumentary"
    },
    {
        author: "AUTOSPORT",
        title: "What the Bahrain and Saudi cancellations reveal about how F1's money works",
        newsUrl: "https://www.autosport.com/f1/news/what-the-bahrain-and-saudi-cancellations-reveal-about-how-f1s-money-works/10811691/",
        imageUrl: "https://cdn-6.motorsport.com/images/amp/0k7aXNq0/s300/race-start.webp",
        alt: "F1 Bahrain grand prix at night"
    },
]

const drivers = [
    {
        name: "Lando Norris",
        points: 25,
        imageUrl: "https://cdn-6.motorsport.com/images/mgl/YEQ1jk1Y/s400/lando-norris-mclaren.webp"
    },
    {
        name: "Max Verstappen",
        points: 12,
        imageUrl:"https://cdn-6.motorsport.com/images/mgl/YvKQLrx6/s400/max-verstappen-red-bull-racing.webp"
    },
    {
        name: "Gabriel Bortoleto",
        points: 2,
        imageUrl: "https://cdn-8.motorsport.com/images/mgl/27NQLaX0/s400/gabriel-bortoleto-audi-f1-team.webp"
    },
    {
        name: "Isack Hadjar",
        points: 4,
        imageUrl: "https://cdn-5.motorsport.com/images/mgl/0o5PLJxY/s400/isack-hadjar-red-bull-racing.webp"
    },
    {
        name: "Pierre Gasly",
        points: 15,
        imageUrl: "https://cdn-6.motorsport.com/images/mgl/0arKBdp2/s400/pierre-gasly-alpine.webp"
    },
    {
        name: "Sergio Perez",
        points: 0, 
        imageUrl: "https://cdn-8.motorsport.com/images/mgl/6x7Z5M7Y/s400/sergio-perez-cadillac-racing.webp"
    },
    {
        name: "Kimi Antonelli",
        points: 72,
        imageUrl: "https://cdn-2.motorsport.com/images/mgl/6Al7y5wY/s400/andrea-kimi-antonelli-mercedes.webp"
    },
    {
        name: "Fernando Alonso",
        points: 0,
        imageUrl: "https://cdn-8.motorsport.com/images/mgl/0ZRQbbN0/s400/fernando-alonso-aston-martin-r.webp"
    },
    {
        name: "Charles Leclerc",
        points: 49, 
        imageUrl: "https://cdn-4.motorsport.com/images/mgl/6grBRd7Y/s400/charles-leclerc-ferrari.webp"
    },
    {
        name: "Lance Stroll",
        points: 0, 
        imageUrl: "https://cdn-6.motorsport.com/images/mgl/0ZRQlG80/s400/lance-stroll-aston-martin.webp"
    },
    {
        name: "Alex Albon",
        points: 0,
        imageUrl: "https://cdn-1.motorsport.com/images/mgl/0rG38zm2/s400/alex-albon-williams.webp"
    },
    {
        name: "Nico Hulkenberg",
        points: 0, 
        imageUrl: "https://cdn-3.motorsport.com/images/mgl/63QmpND2/s400/nico-hulkenberg-audi-f1-team.webp"
    },
    {
        name: "Liam Lawson",
        points: 10, 
        imageUrl: "https://cdn-9.motorsport.com/images/mgl/68yGp5V0/s400/liam-lawson.webp"
    },
    {
        name: "Esteban Ocon",
        points: 1, 
        imageUrl: "https://cdn-9.motorsport.com/images/mgl/Y99KyPxY/s400/esteban-ocon-haas-f1-team.webp"
    },
    {
        name: "Arvid Lindblad",
        points: 4, 
        imageUrl: "https://cdn-8.motorsport.com/images/mgl/YE9wONPY/s400/arvid-lindblad-racing-bulls.webp"
    },
    {
        name: "Franco Colapinto",
        points: 1, 
        imageUrl: "https://cdn-2.motorsport.com/images/mgl/6zoJLq70/s400/franco-colapinto-alpine.webp"
    },
    {
        name: "Lewis Hamilton",
        points: 41, 
        imageUrl: "https://cdn-3.motorsport.com/images/mgl/0rVxlq50/s400/lewis-hamilton-ferrari-2.webp"
    },
    {
        name: "Carlos Sainz",
        points: 2, 
        imageUrl: "https://cdn-4.motorsport.com/images/mgl/2jXPqrg6/s400/carlos-sainz-williams.webp"
    },
    {
        name: "George Russell",
        points: 63, 
        imageUrl: "https://cdn-6.motorsport.com/images/mgl/6lmdl1k0/s400/george-russell-mercedes.webp"
    },
    {
        name: "Valtteri Bottas",
        points: 0, 
        imageUrl: "https://cdn-5.motorsport.com/images/mgl/63QmoN82/s400/valtteri-bottas-cadillac-racin.webp"
    },
    {
        name: "Oscar Piastri",
        points: 21, 
        imageUrl: "https://cdn-4.motorsport.com/images/mgl/YBe5yNn2/s400/oscar-piastri-mclaren.webp"
    },
    {
        name: "Oliver Bearman",
        points: 17,
        imageUrl: "https://cdn-1.motorsport.com/images/mgl/6D1JxPO0/s400/oliver-bearman-haas.webp"
    }
]


const races = [
    {
        grandPrix: "AUSTRALIAN GP",
        dateStart: "2026-03-05",
        dateEnd: "2026-03-08",
        info: "The season opener at Albert Park. A classic street circuit that has hosted the Australian Grand Prix since 1996.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmelbournedetailed.webp"
    },
    {
        grandPrix: "CHINESE GP",
        dateStart: "2026-03-12",
        dateEnd: "2026-03-15",
        info: "Held at the Shanghai International Circuit, designed to look like the Chinese symbol 'shang'. It features one of the longest straights in F1.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackshanghaidetailed.webp"
    },
    {
        grandPrix: "JAPANESE GP",
        dateStart: "2026-03-26",
        dateEnd: "2026-03-29",
        info: "Suzuka is one of the most technical tracks on the calendar, famous for its unique 'Figure-8' layout and the high-speed 130R corner.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksuzukadetailed.webp"
    },
    {
        grandPrix: "MIAMI GP",
        dateStart: "2026-05-01",
        dateEnd: "2026-05-03",
        info: "The Miami International Autodrome is a temporary circuit built around the Hard Rock Stadium. It brings a unique 'Super Bowl' energy to F1, featuring 19 corners and three straights, allowing for top speeds of up to 320km/h.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmiamidetailed.webp"
    },
    {
        grandPrix: "CANADIAN GP",
        dateStart: "2026-05-22",
        dateEnd: "2026-05-24",
        info: "The Circuit Gilles-Villeneuve, located on the man-made Notre Dame Island, is famous for the 'Wall of Champions' at the final chicane. It has been a staple of the F1 calendar since 1978 and is known for its high-speed nature and heavy braking zones.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmontrealdetailed.webp"
    },
    {
        grandPrix: "MONACO GP",
        dateStart: "2026-06-05",
        dateEnd: "2026-06-07",
        info: "The Jewel in the Crown of Formula 1. First run in 1929, this street circuit is the ultimate test of driver precision. It features the slowest corner in F1 (the Fairmont Hairpin) and the only tunnel on the calendar.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmontecarlodetailed.webp"
    },
    {
        grandPrix: "BARCELONA-CATALUNYA GP",
        dateStart: "2026-06-12",
        dateEnd: "2026-06-14",
        info: "A long-time favorite for testing due to its mix of high and low-speed corners. The track was built as part of the 1992 Olympic development program and is famous for the long drag race down to Turn 1.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackcatalunyadetailed.webp"
    },
    {
        grandPrix: "AUSTRIAN GP",
        dateStart: "2026-06-26",
        dateEnd: "2026-06-28",
        info: "The Red Bull Ring is located in the scenic Styrian Mountains. It is a short, fast lap with significant elevation changes and only 10 corners, making for incredibly tight qualifying sessions.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackspielbergdetailed.webp"
    },
    {
        grandPrix: "GREAT BRITAIN GP",
        dateStart: "2026-07-03",
        dateEnd: "2026-07-05",
        info: "Silverstone hosted the very first F1 World Championship race in 1950. It is one of the fastest tracks on the calendar, featuring legendary corner sequences like Maggots, Becketts, and Chapel.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksilverstonedetailed.webp"
    },
    {
        grandPrix: "BELGIAN GP",
        dateStart: "2026-07-17",
        dateEnd: "2026-07-19",
        info: "Spa-Francorchamps is the longest track in F1 and a favorite of all drivers. It is home to 'Eau Rouge,' perhaps the most famous corner in the world, where cars plunge down a hill before climbing a steep incline at full throttle.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackspafrancorchampsdetailed.webp"
    },
    {
        grandPrix: "HUNGARIAN GP",
        dateStart: "2026-07-24",
        dateEnd: "2026-07-26",
        info: "Often called 'Monaco without the walls,' the Hungaroring is a tight, twisty circuit where overtaking is a massive challenge. It was the first F1 race held behind the 'Iron Curtain' in 1986.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackhungaroringdetailed.webp"
    },
    {
        grandPrix: "NETHERLANDS GP",
        dateStart: "2026-08-21",
        dateEnd: "2026-08-23",
        info: "Circuit Zandvoort returned to F1 in 2021 with unique 18-degree banked corners at Hugenholtz and Arie Luyendyk. It is famous for its 'Orange Army' atmosphere supporting Max Verstappen.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackzandvoortdetailed.webp"
    },
    {
        grandPrix: "ITALIAN GP",
        dateStart: "2026-09-04",
        dateEnd: "2026-09-06",
        info: "The 'Temple of Speed.' Monza is the heart of the Ferrari Tifosi. Built in 1922, it is one of the oldest purpose-built tracks in the world and produces the highest top speeds of the season.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmonzadetailed.webp"
    },
    {
        grandPrix: "SPANISH GP (MADRID)",
        dateStart: "2026-09-11",
        dateEnd: "2026-09-13",
        info: "2026 marks the debut of the new Madrid street circuit around the IFEMA exhibition center. This semi-street track replaces Barcelona as the home of the Spanish GP, bringing F1 directly into the heart of Spain's capital.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmadringdetailed.webp"
    },
    {
        grandPrix: "AZERBAIJAN GP",
        dateStart: "2026-09-24",
        dateEnd: "2026-09-26",
        info: "Baku is a circuit of extremes: it features a 2km long main straight alongside a section so narrow it passes through the walls of the city's UNESCO-protected Old Town.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackbakudetailed.webp"
    },
    {
        grandPrix: "SINGAPORE GP",
        dateStart: "2026-10-09",
        dateEnd: "2026-10-11",
        info: "The original F1 night race. Marina Bay is a physical gauntlet for drivers due to extreme humidity and a bumpy street surface. The race regularly hits the two-hour time limit.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksingaporedetailed.webp"
    },
    {
        grandPrix: "UNITED STATES GP",
        dateStart: "2026-10-23",
        dateEnd: "2026-10-25",
        info: "COTA in Austin was the first purpose-built F1 facility in the US. It takes inspiration from iconic tracks, featuring a first sector similar to Silverstone and a stadium section like Hockenheim.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackaustindetailed.webp"
    },
    {
        grandPrix: "MEXICO GP",
        dateStart: "2026-10-30",
        dateEnd: "2026-11-01",
        info: "At 2,200m above sea level, the thin air at the Autódromo Hermanos Rodríguez makes the cars incredibly fast but reduces downforce. The highlight is the Foro Sol stadium section, where cars drive through a baseball arena.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmexicocitydetailed.webp"
    },
    {
        grandPrix: "BRAZIL GP",
        dateStart: "2026-11-06",
        dateEnd: "2026-11-08",
        info: "Interlagos is an old-school masterpiece. The anti-clockwise track is famous for its passionate fans and unpredictable weather, often resulting in some of the most dramatic championship deciders in history.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackinterlagosdetailed.webp"
    },
    {
        grandPrix: "LAS VEGAS GP",
        dateStart: "2026-11-19",
        dateEnd: "2026-11-21",
        info: "A high-speed blast down the iconic Las Vegas Strip. Racing past the Sphere and the Bellagio fountains at 340km/h, this Saturday night race is the ultimate fusion of sports and entertainment.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracklasvegasdetailed.webp"
    },
    {
        grandPrix: "QATAR GP",
        dateStart: "2026-11-27",
        dateEnd: "2026-11-29",
        info: "Lusail is a fast, flowing circuit designed for motorcycles, which makes it a high-G-force challenge for F1 drivers. It features 16 corners and a kilometer-long straight.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracklusaildetailed.webp"
    },
    {
        grandPrix: "ABU DHABI GP",
        dateStart: "2026-12-04",
        dateEnd: "2026-12-06",
        info: "The traditional season finale at Yas Marina. Known for its sunset-to-night transition and the unique pit exit that goes through an underground tunnel.",
        imageUrl: "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackyasmarinacircuitdetailed.webp"
    }

]
function createDriverCard(drivers) {
    const container = document.querySelector(".f1-drivers");
    container.innerHTML = "";
    drivers.forEach(driver => {
        let card = document.createElement("section");
        let driverName = document.createElement("h2");
        let driverPoints = document.createElement("p");
        let driverPicture = document.createElement("img");

        driverName.innerHTML = `${driver.name}`;
        driverPoints.innerHTML = `<span class="label">Points: </span>${driver.points}`
        
        driverPicture.setAttribute("loading", "lazy");
        driverPicture.setAttribute("width", "300");
        driverPicture.setAttribute("height", "175");
        driverPicture.setAttribute("crossorigin", "anonymous");
        driverPicture.setAttribute("src", driver.imageUrl);
        driverPicture.setAttribute("alt", `Formula 1 Driver: ${driver.name}`)
        card.setAttribute("class", "driver-card")
        card.appendChild(driverName);
        card.appendChild(driverPoints);
        card.appendChild(driverPicture);

        container.appendChild(card);

    });
}

function createNewsSection(newsArray) {
    const newsSection = document.querySelector(".f1-news");
    newsSection.innerHTML = "";
    const title = document.createElement("h2");
    title.innerHTML = "F1 News";
    newsSection.appendChild(title);
    newsArray.forEach(news => {
        const newsCard = document.createElement("article");
        newsCard.innerHTML = 
        `
        <p class="author"><span>${news.author}</span></p>
        <h3><a href="${news.newsUrl}">${news.title}</a></h3>
        <img src="${news.imageUrl}" alt="${news.alt}" loading="lazy" width="300" height="200" crossorigin="anonymous">
        `;
        newsSection.appendChild(newsCard);
    }
        
    )
}

function createChampionshipTable(drivers) {
    const championshipTable = document.querySelector(".f1-championship");
    let ranking = 1;
    championshipTable.innerHTML = "";

    drivers.forEach(driver => {
        const driverRow = document.createElement("tr");
        driverRow.innerHTML=
        `
        <td>${ranking}</td>
         <td>${driver.name}</td>
         <td>${driver.points}</td>
        `;
        championshipTable.appendChild(driverRow);
        ranking++;
    })
}

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
    const buttons = document.querySelectorAll(".team-selector button")
    const savedTheme = getTheme();
    const today = new Date();
    const year = today.getFullYear();
    const sortedDrivers = drivers.sort((a,b) => b.points - a.points)
    createDriverCard(sortedDrivers);
    createNewsSection(f1News);
    createChampionshipTable(drivers);

    document.querySelector("#lastModified").innerHTML = document.lastModified;
    document.querySelector("#currentyear").textContent = year; 
    setTheme(savedTheme);

    buttons.forEach(button => button.addEventListener("click", () => setTheme(button.id)))
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
}
)
