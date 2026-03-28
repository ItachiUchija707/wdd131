const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const calculateWindChill = (temp, speed) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));

const temperature = parseFloat(document.querySelector("#temperature").textContent);
const speed = parseFloat(document.querySelector("#wind").textContent);

if (temperature <= 10 && speed > 4.8) {
    const windchill = calculateWindChill(temperature, speed);
    document.querySelector("#windchill").textContent = ` ${windchill.toFixed(1)} °C`;

}

else {
    document.querySelector("#windchill").textContent = " N/A";
}