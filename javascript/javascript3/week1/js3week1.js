const api = {
    key: "d002ab69f262a7d39e614b2ada1e35c2",
    base: "https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setWeather);

function setWeather(evnt) {
    if (evnt.keyCode == 13) {
        getResults(searchBox.value)
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&nits=metric&APPID=${api.key} `)
    .then(weather => {
        return weather.json();
    }).then(displayresults);
}

function displayresults (weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerHTML = weather.name + " " + weather.sys.country 

    let now = new Date();
    let date = document.querySelector(`.date`);
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector(`.current .temp`);
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°</span>`; 

    let weatherNow = document.querySelector(`.current .weather`);
    weatherNow.innerHTML = weather.main.Math.round
}
