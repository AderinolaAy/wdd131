// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values for weather (matching displayed content)
let temperature = 8;   // °C
let windSpeed = 10;    // km/h

// Wind chill calculation function (returns °C)
function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Only calculate if conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  let windChill = calculateWindChill(temperature, windSpeed);
  
  // Update the weather section dynamically
  const weatherSection = document.querySelector(".weather");
  const windChillElement = document.createElement("p");
  windChillElement.innerHTML = `<strong>Calculated Wind Chill:</strong> ${windChill} °C`;
  weatherSection.appendChild(windChillElement);
}
