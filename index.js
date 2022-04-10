// //declare variables
let search = document.getElementById("search1");
let submit = document.getElementById("submit");
let cityName = document.getElementById("cityName");
let con = document.getElementById("con");
// let con = document.getElementById("con");
let date = document.getElementById("date");
let weather = document.getElementById("weatherIcon");

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
        //outputs name of the city searched by zipcode
        cityName.innerHTML = result.name;
        //outputs current temperature
        temp.innerHTML = Math.round((result.main.temp*1.8)-459.67)+'F°';
        //outputs condition
        // con.innerHTML = result.name;
        con.innerHTML = result.weather[0].main;
        //outputs low and high temp
        low.innerHTML = Math.round((result.main.temp_min*1.8)-459.67)+'F°';
        high.innerHTML = Math.round((result.main.temp_max*1.8)-459.67)+'F°';
        search.value = "";
        // weather.scr="images\sun.jpg";

//weather conditions: thunderstorm, drizzle,  rain, snow, clouds,  clear
        // if (result.weather[0].main == "Thunderstorm") {
        //     document.getElementById("weatherIcon").src="images\thunderstorm.png";
        // } else if (result.weather[0].main == "Rain" || "Drizzle"){
        //     document.getElementById("weatherIcon").src="images\rain.png";
        // } else if (result.weather[0].main == "Clouds"){
        //     document.getElementById("weatherIcon").src="images\cloud.png";
        // } else if (result.weather[0].main == "Snow"){
        //     document.getElementById("weatherIcon").src="images\snow.png";
        // } else if (result.weather[0].main == "Clear") {  //clear
        //     document.getElementById("weatherIcon").src = "images\sun.jpg";
        //     // weatherIcon.src="images\sun.jpg";
        // } else { 
        //     document.getElementById("weatherIcon").src="";
        // }
    })




    
}
