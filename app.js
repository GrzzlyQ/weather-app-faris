const apiKey = '66f0a92ce2f996ee61e1a43bc3e8a8ec'; 
const city = 'Jakarta';

function fetchWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        document.getElementById('location').textContent = location;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('description').textContent = description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${iconCode}.png`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

fetchWeatherData();

const linkDivJakarta = document.getElementById("weather-jakarta");

linkDivJakarta.addEventListener('click', function() {
const url = 'https://weather.com/weather/today/l/8bed94476b86fa748ce0488322545f7e481b322928d0d069ab5659fa8a68317d';

window.open(url, '_blank');
});

const city1 = 'City of Balikpapan';

function fetchWeatherData1() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        document.getElementById('location1').textContent = location;
        document.getElementById('temperature1').textContent = `${temperature}°C`;
        document.getElementById('description1').textContent = description;
        document.getElementById('weather-icon1').src = `http://openweathermap.org/img/w/${iconCode}.png`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

fetchWeatherData1();

const linkDivBalikpapan = document.getElementById("weather-balikpapan");

linkDivJakarta.addEventListener('click', function() {
const url = 'https://weather.com/weather/today/l/f7db3641872cd9b5a59eee1bfd3672b4131273afe85fd845702c0815d88706c1';

window.open(url, '_blank');
});

const city2 = 'Banda Aceh';

function fetchWeatherData2() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        document.getElementById('location2').textContent = location;
        document.getElementById('temperature2').textContent = `${temperature}°C`;
        document.getElementById('description2').textContent = description;
        document.getElementById('weather-icon2').src = `http://openweathermap.org/img/w/${iconCode}.png`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

fetchWeatherData2();

const linkDivBandaAceh = document.getElementById("weather-banda-aceh");

linkDivJakarta.addEventListener('click', function() {
const url = 'https://weather.com/weather/today/l/29f8d8f2095d285c4c88837ddf380e31703951d6c312f1522edd9f259c8793dc';

window.open(url, '_blank');
});