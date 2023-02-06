let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", findCity);

function findCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
}

function formatDate(currentDate) {
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[currentDate.getDay()];

 let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hour}:${minutes}`;
}

formatDate(new Date());

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", fTemp);

function fTemp(event) {
  event.preventDefault();
  let tempDeg = document.querySelector("#temp-deg");
  let tempUnit = document.querySelector("#temp-unit");
  let fTemp = tempDeg.innerHTML;
  fTemp = Math.round(fTemp * 1.8 + 32);
  tempDeg.innerHTML = fTemp;
  tempUnit.innerHTML = "F"
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", cTemp);

function cTemp(event) {
  event.preventDefault();
  let tempDeg = document.querySelector("#temp-deg");
  let tempUnit = document.querySelector("#temp-unit");
  let cTemp = tempDeg.innerHTML;
  cTemp = Math.round((cTemp - 32) / 1.8);
  tempDeg.innerHTML = cTemp;
  tempUnit.innerHTML = "C"

}