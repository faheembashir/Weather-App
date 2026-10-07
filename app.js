const apiID = `ca3713d41f6fe254fb711c00b77817f2`;
let input = document.querySelector(".input");
let btn = document.querySelector("button");
let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city");
let weatherImg = document.querySelector(".weather-icon");
let windSpeed = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let body = document.querySelector("body");

///*****function for displaying data******************* */
async function getWeather(url) {  
    try {
        let weather = await axios.get(url);
        temp.innerText = `${Math.floor(weather.data.main.temp)} °C`;
        cityName.innerText = weather.data.name;
        // console.log(weather.data.weather[0].main);
        windSpeed.innerText = `${weather.data.wind.speed} km/h`;
        humidity.innerText = `${weather.data.main.humidity} %`;
        input.value = "";

        ////***********Displaying images********* */
        showImg(weather);

    } catch (err) {
        console.log(err);
        alert("Invalid City Name");
        input.value = "";
    }
}






//***************************Displaying data on  refresh or opening the app */
window.addEventListener("load", function () {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=pulwama&units=metric&appid=${apiID}`;
    getWeather(url);
})


///******On pressing button */

btn.addEventListener("click", function () {
    let city = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;
    getWeather(url);
});

/////********************On Pressing enter Key */


input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        let city = input.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;
        getWeather(url);

    }
})

function showImg(weather) {
    let weatherCondition = weather.data.weather[0].main;
    if (weatherCondition == "Clear") {

        weatherImg.src = "images/clear.png";

    } else if (weatherCondition == "Clouds") {

        weatherImg.src = "images/clouds.png";

    } else if (weatherCondition == "Drizzle") {

        weatherImg.src = "images/drizzle.png";

    } else if (weatherCondition == "Rain") {

        weatherImg.src = "images/rain.png";

    } else if (weatherCondition == "Mist") {

        weatherImg.src = "images/mist.png";

    } else if (weatherCondition == "Snow") {

        weatherImg.src = "images/snow.png";

    }

};




