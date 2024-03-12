const inputBox = document.querySelector("#inputbar");
const searchBtn = document.querySelector("#searchbar");
const weatherImg = document.querySelector("#weatherImg");
const temp = document.querySelector("#cel");
const perHumi = document.querySelector(".perHumi");
const windSpeed = document.querySelector(".per1");
const tag = document.querySelector("#tag");

// 02d1fa6b777f5b911516a43d29c5bb3e

async function checkWeather(city) {
  const api = "02d1fa6b777f5b911516a43d29c5bb3e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  const weather_data = await fetch(`${url}`).then((res) => res.json());
  console.log(weather_data);

  if (weather_data.cod === `404`) {
    weatherImg.src = "/images/error.webp";
    tag.innerHTML = "Sorry, Location not Found!!!";
    tag.style.textAlign = "center";
  }

  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C
    </sup>`;
  perHumi.innerHTML = `${weather_data.main.humidity}%`;
  // windSpeed.innerHTML = `${weather_data.main.}`;
  tag.innerHTML = `${weather_data.weather[0].description}`;
  windSpeed.innerHTML = `${weather_data.wind.speed}K/M`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "./images/cloud.webp";
      break;
    case "Clear":
      weatherImg.src = "./images/clear.webp";
      break;
    case "Mist":
      weatherImg.src = "./images/thunder.webp";
      break;
    case "Snow":
      weatherImg.src = "./images/snow.webp";
      break;
    case "Rain":
      weatherImg.src = "./images/rain.webp";
      break;
    case "Haze":
      weatherImg.src = "./images/haze.png";
      break;
    case "Smoke":
      weatherImg.src = "./images/smoke.webp";
      break;
  }

  inputBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
