const apiKey = "9cb36f664555e2205b99c0afbf3cd6e1";

const form = document.getElementById("form");
const city = document.getElementById("city");
const weatherDiv = document.getElementById("weather");
const iconDiv = document.getElementById("icon");
const temparatureDiv = document.getElementById("temparature");
const desctriptionDiv = document.getElementById("desctription");
const detailsDiv = document.getElementById("details");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});

async function getWeather(cityValue) {
    desctriptionDiv.textContent=''
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    const temperature = Math.round(data.main.temp); // yuvarlama işlemi
    const icon = data.weather[0].icon;
    const details = [
      `Hissedilen ${Math.round(data.main.feels_like)}°C`,
      `Nem Oranı ${data.main.humidity}%`,
      `Rüzgar ${data.wind.speed} m/s`,
    ];

    iconDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    temparatureDiv.textContent = `${temperature}°C`;

    let detailsNew = details.map((detail) => `<div>${detail}</div>`).join('');

    detailsDiv.innerHTML = detailsNew;
  } catch (error) {
    temparatureDiv.textContent=''
    iconDiv.textContent=''
    detailsDiv.textContent=''

    desctriptionDiv.textContent=`Lütfen geçerli bir konum giriniz: ${cityValue} yanlış bir isimlendirme`
  }
}
