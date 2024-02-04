const apiKey = "8d0e9d17ae086f1e7786107ef04d60cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/Clouds.png";
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "images/Clear.png";
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/Drizzle.png";
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "images/Mist.png";
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
