// footer section
const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

// form section
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const product = document.querySelector("#product");
products.forEach((emp) => 
    {   const newProduct = document.createElement("option");
        newProduct.textContent = emp.name;
        newProduct.value = emp.id;
        product.appendChild(newProduct);
    }

);

let reviewsCompleted = Number(window.localStorage.getItem("reviewsCompletedCount")) || 0;
const submission = document.querySelector(".productReview");
submission.addEventListener("submit", () => {
        reviewsCompleted++;
        localStorage.setItem("reviewsCompletedCount", reviewsCompleted);
})

