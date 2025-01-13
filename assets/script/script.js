//API Key
var apiKey = '5838aea9561da3a1bb1d6837bc606ec3';

localStorage.clear();
//Refers to "Temp:", "Wind:", and "Humidity:" in current weather and "5-Day Forecast"

//var windSpeed = document.querySelector("#wind");
//var temperature = document.querySelector("#temp");
//var humid = document.querySelector("#humid");
var cityIcon = document.querySelector("#city-icon");

var day1Temp = document.querySelector("#day1-temp");
var day1Wind = document.querySelector("#day1-wind");
var day1Humid = document.querySelector("#day1-humid");
var dateOne = document.querySelector("#date1-icon");

var day2Temp = document.querySelector("#day2-temp");
var day2Wind = document.querySelector("#day2-wind");
var day2Humid = document.querySelector("#day2-humid");
var dateTwo = document.querySelector("#date2-icon");

var day3Temp = document.querySelector("#day3-temp");
var day3Wind = document.querySelector("#day3-wind");
var day3Humid = document.querySelector("#day3-humid");
var dateThree = document.querySelector("#date3-icon");

var day4Temp = document.querySelector("#day4-temp");
var day4Wind = document.querySelector("#day4-wind");
var day4Humid = document.querySelector("#day4-humid");
var dateFour = document.querySelector("#date4-icon");

var day5Temp = document.querySelector("#day5-temp");
var day5Wind = document.querySelector("#day5-wind");
var day5Humid = document.querySelector("#day5-humid");
var dateFive = document.querySelector("#date5-icon");


//Refers to "Search for a City:"
var search = document.querySelector("#searchBtn");
var input = document.querySelector("#location");
var citiesListEl = $("#cities");
 

//Refers to selected city for current weather
var citySpan = document.querySelector("#city");


//Saves information to localStorage
localStorage.getItem("saveCity");
saveCity();

function saveCity() {
    var city = localStorage.getItem("city");
    citySpan.textContent = city;
    document.getElementById("cities").innerHTML = localStorage.getItem("citiesListEl");
};


//Allows previous cities to be searched again when clicked
citiesListEl[0].addEventListener("click", function() {
    console.log("search " + citySpan.textContent);
});


//Data for forecast appears when a city is typed in and the search button is clicked
search.addEventListener("click", function(event) {
    event.preventDefault();

    let cityName = '';
    var inputVal = input.value;

    var city = document.querySelector("#location").value;

    if (inputVal !== '') {
        cityName = inputVal;
        var listCity = $("<button class='addedCity'>");
        listCity.text(inputVal);
        citiesListEl.append(listCity);

        localStorage.setItem("city", city);
        localStorage.setItem("citiesListEl", (citiesListEl[0].innerHTML));
        saveCity();

    } else if (inputVal === '') {
        alert("Please Enter A City Name");
    }


    //URL for weather API
    var weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
    

    //fetches weather API
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const { list } = data;
  

        //puts weather data onto the page
        temp.textContent = list[0].main.temp;
        wind.textContent = list[0].wind.speed;
        humid.textContent = list[0].main.humidity;
        cityIcon.setAttribute("src", `assets/images/${list[0].weather[0].icon}`);

        day1Temp.textContent = list[1].main.temp;
        day1Wind.textContent = list[1].wind.speed;
        day1Humid.textContent = list[1].main.humidity;
        dateOne.setAttribute("src", `assets/images/${list[1].weather[0].icon}`);

        day2Temp.textContent = list[2].main.temp;
        day2Wind.textContent = list[2].wind.speed;
        day2Humid.textContent = list[2].main.humidity;
        dateTwo.setAttribute("src", `assets/images/${list[2].weather[0].icon}`);

        day3Temp.textContent = list[3].main.temp;
        day3Wind.textContent = list[3].wind.speed;
        day3Humid.textContent = list[3].main.humidity;
        dateThree.setAttribute("src", `assets/images/${list[3].weather[0].icon}`);

        day4Temp.textContent = list[4].main.temp;
        day4Wind.textContent = list[4].wind.speed;  
        day4Humid.textContent = list[4].main.humidity;
        dateFour.setAttribute("src", `assets/images/${list[4].weather[0].icon}`);

        day5Temp.textContent = list[5].main.temp;
        day5Wind.textContent = list[5].wind.speed;
        day5Humid.textContent = list[5].main.humidity;
        dateFive.setAttribute("src", `assets/images/${list[5].weather[0].icon}`);
    });
});


//class is days
//Gets the date for the current day and the next five days
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
