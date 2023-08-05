
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



var apiKey = '5838aea9561da3a1bb1d6837bc606ec3';
var inputVal =  $("#location");
var formEl = $("#form");



var weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=imperial`;

fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
        const { list } = data;
    
    var image = document.querySelector("#city-icon");
    var windSpeed = document.querySelector("#wind");
    var temperature = document.querySelector("#temp");
    var humid = document.querySelector("#humid");

//    console.log(data.list[0].weather[0].id);
    console.log(data);
    console.log(`https://openweathermap.org/img/wn/10d@2x.png`);

//    image.textContent = icon;
    temperature.textContent = list[0].main.temp;
    windSpeed.textContent = list[0].wind.speed; 
    humid.textContent = list[0].main.humidity;

    var day1Temp = document.querySelector("#day1-temp");
    var day1Wind = document.querySelector("#day1-wind");
    var day1Humid = document.querySelector("#day1-humid");

    day1Temp.textContent = list[1].main.temp;
    day1Wind.textContent = list[1].wind.speed;
    day1Humid.textContent = list[1].main.humidity;

    var day2Temp = document.querySelector("#day2-temp");
    var day2Wind = document.querySelector("#day2-wind");
    var day2Humid = document.querySelector("#day2-humid");

    day2Temp.textContent = list[2].main.temp;
    day2Wind.textContent = list[2].wind.speed;
    day2Humid.textContent = list[2].main.humidity;

    var day3Temp = document.querySelector("#day3-temp");
    var day3Wind = document.querySelector("#day3-wind");
    var day3Humid = document.querySelector("#day3-humid");

    day3Temp.textContent = list[3].main.temp;
    day3Wind.textContent = list[3].wind.speed;
    day3Humid.textContent = list[3].main.humidity;

    var day4Temp = document.querySelector("#day4-temp");
    var day4Wind = document.querySelector("#day4-wind");
    var day4Humid = document.querySelector("#day4-humid");

    day4Temp.textContent = list[4].main.temp;
    day4Wind.textContent = list[4].wind.speed;
    day4Humid.textContent = list[4].main.humidity;

    var day5Temp = document.querySelector("#day5-temp");
    var day5Wind = document.querySelector("#day5-wind");
    var day5Humid = document.querySelector("#day5-humid");

    day5Temp.textContent = list[5].main.temp;
    day5Wind.textContent = list[5].wind.speed;
    day5Humid.textContent = list[5].main.humidity;

});


