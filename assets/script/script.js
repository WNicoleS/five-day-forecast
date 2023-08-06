
var apiKey = '5838aea9561da3a1bb1d6837bc606ec3';
var weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=San Diego&appid=${apiKey}&units=imperial`;

let city;
var input = $("input");
var formEl = $("#form");


var citiesListEl = $("#cities");
var addedCity = document.querySelector("#added-city");

formEl.on('submit', function(event) {
    event.preventDefault();

    var inputVal = input.val();

    if (inputVal !== "") {
            var listCity = $("<button id='added-city'>");
            listCity.text(inputVal);
            citiesListEl.append(listCity);
            input.val("");
        }   
});


fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
        const { list, weather, icon, city } = data;
        
    var windSpeed = document.querySelector("#wind");
    var temperature = document.querySelector("#temp");
    var humid = document.querySelector("#humid");
    var cityIcon = document.querySelector("#city-icon");

    var cityName = $("#city");
    cityName.text(city.name);

    console.log(data.city.name);
    console.log(city.name);
    location = city.name;
    console.log(location);

    temperature.textContent = list[0].main.temp;
    windSpeed.textContent = list[0].wind.speed; 
    humid.textContent = list[0].main.humidity;
    cityIcon.setAttribute("src", `assets/images/${list[0].weather[0].icon}`);

    var day1Temp = document.querySelector("#day1-temp");
    var day1Wind = document.querySelector("#day1-wind");
    var day1Humid = document.querySelector("#day1-humid");
    var dateOne = document.querySelector("#date1-icon");

    day1Temp.textContent = list[1].main.temp;
    day1Wind.textContent = list[1].wind.speed;
    day1Humid.textContent = list[1].main.humidity;
    dateOne.setAttribute("src", `assets/images/${list[1].weather[0].icon}`);

    var day2Temp = document.querySelector("#day2-temp");
    var day2Wind = document.querySelector("#day2-wind");
    var day2Humid = document.querySelector("#day2-humid");
    var dateTwo = document.querySelector("#date2-icon");

    day2Temp.textContent = list[2].main.temp;
    day2Wind.textContent = list[2].wind.speed;
    day2Humid.textContent = list[2].main.humidity;
    dateTwo.setAttribute("src", `assets/images/${list[2].weather[0].icon}`);

    var day3Temp = document.querySelector("#day3-temp");
    var day3Wind = document.querySelector("#day3-wind");
    var day3Humid = document.querySelector("#day3-humid");
    var dateThree = document.querySelector("#date3-icon");

    day3Temp.textContent = list[3].main.temp;
    day3Wind.textContent = list[3].wind.speed;
    day3Humid.textContent = list[3].main.humidity;
    dateThree.setAttribute("src", `assets/images/${list[3].weather[0].icon}`);

    var day4Temp = document.querySelector("#day4-temp");
    var day4Wind = document.querySelector("#day4-wind");
    var day4Humid = document.querySelector("#day4-humid");
    var dateFour = document.querySelector("#date4-icon");

    day4Temp.textContent = list[4].main.temp;
    day4Wind.textContent = list[4].wind.speed;  
    day4Humid.textContent = list[4].main.humidity;
    dateFour.setAttribute("src", `assets/images/${list[4].weather[0].icon}`);

    var day5Temp = document.querySelector("#day5-temp");
    var day5Wind = document.querySelector("#day5-wind");
    var day5Humid = document.querySelector("#day5-humid");
    var dateFive = document.querySelector("#date5-icon");

    day5Temp.textContent = list[5].main.temp;
    day5Wind.textContent = list[5].wind.speed;
    day5Humid.textContent = list[5].main.humidity;
    dateFive.setAttribute("src", `assets/images/${list[5].weather[0].icon}`);
});


var currentDate = dayjs().format("MM/DD/YYYY");
document.getElementById("date").textContent = currentDate;

var day1 = dayjs().add(1, 'day').format("MM/DD/YYYY");
document.getElementById("date1").textContent = day1;

var day2 = dayjs().add(2, 'day').format("MM/DD/YYYY");
document.getElementById("date2").textContent = day2;

var day3 = dayjs().add(3, 'day').format("MM/DD/YYYY");
document.getElementById("date3").textContent = day3;

var day4 = dayjs().add(4, 'day').format("MM/DD/YYYY");
document.getElementById("date4").textContent = day4;

var day5 = dayjs().add(5, 'day').format("MM/DD/YYYY");
document.getElementById("date5").textContent = day5;
