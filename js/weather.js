const API_KEY = "e533c39b1fe110918a8087f565f4e736";
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerHTML = `<strong>${data.name}</strong>의 날씨`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGEoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGEoError);
