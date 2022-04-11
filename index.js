// //declare variables
let search = document.getElementById("search1");
let submit = document.getElementById("submit");
let cityName = document.getElementById("cityName");
let con = document.getElementById("con");
let date = document.getElementById("date");
let weather = document.getElementById("weatherIcon");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let map = document.getElementById("map");


//date and time
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
date.innerHTML = `${month}/${day}/${year}`;

// button initiates
submit.addEventListener('click', getWeather)

function getWeather(e){
    e.preventDefault();
    let zip = search1.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=089afca0039437fccbbf55ef947f7695`,)
    .then(response => response.json()) 
    .then(result => {
        
        //outputs name of the city and map searched by zipcode
        //please get your own key for the map to work!
        cityName.innerHTML = result.name;
        map = document.getElementById("map").src=`https://www.google.com/maps/embed/v1/place?key={YOUR KEY HERE}
        &q=${zip}`;

        //outputs current temperature
        temp.innerHTML = Math.round((result.main.temp*1.8)-459.67)+'F°';
        
        //outputs condition
        con.innerHTML = result.weather[0].main;
        
        //outputs low and high temp
        low.innerHTML = Math.round((result.main.temp_min*1.8)-459.67)+'F°';
        high.innerHTML = Math.round((result.main.temp_max*1.8)-459.67)+'F°';
        
        //wind and humidity
        wind.innerHTML = Math.round(result.wind.speed) + 'mph';  
        humidity.innerHTML = result.main.humidity + '%';
        
        //return input box to placeholder
        search.value = "";

        //make weatherIcon visible
        document.getElementById("weatherIcon").style.visibility = "visible";
        
//weather conditions: thunderstorm, drizzle,  rain, snow, clouds,  clear
if (con.innerHTML == "Thunderstorm") {
        document.getElementById("weatherIcon").src="images/thunderstorm.png";
    } else if (con.innerHTML == "Rain"){
        document.getElementById("weatherIcon").src="images/rain.png";
    } else if (con.innerHTML == "Clouds"){
        document.getElementById("weatherIcon").src="images/cloud.png";
    } else if (con.innerHTML == "Snow"){
        document.getElementById("weatherIcon").src="images/snow.png";
    } else if (con.innerHTML == "Clear") {  //clear
        document.getElementById("weatherIcon").src = "images/sun1.png";
    } else { 
        document.getElementById("weatherIcon").src="images/haze.png";
    }

})




// api call info format
// {
//     "coord": {
//         "lon": -95.5862,
//         "lat": 29.699
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 292.68,
//         "feels_like": 292.7,
//         "temp_min": 290.83,
//         "temp_max": 294.34,
//         "pressure": 1015,
//         "humidity": 77
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.14,
//         "deg": 170,
//         "gust": 8.75
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1649560687,
//     "sys": {
//         "type": 2,
//         "id": 2012367,
//         "country": "US",
//         "sunrise": 1649505733,
//         "sunset": 1649551508
//     },
//     "timezone": -18000,
//     "id": 0,
//     "name": "Houston",
//     "cod": 200
}
