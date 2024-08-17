"use strict";

//Elements

/// buttons elements
const tabs = document.querySelectorAll(".operation__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

/// Clock Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const labelHourTimer = document.querySelector(".digital-hour");
const labelMinuteTimer = document.querySelector(".digital-minute");
const markHour = document.querySelector(".sign-hour");
const markMinute = document.querySelector(".sign-minute");
const apiKey = "d36b55ed739dffcf01e61b37dcff67f0";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`;
const tempEl = document.querySelector(".today-temp");
const analogButton = document.querySelector(".clock_type--btn");
const analogContainer = document.querySelector(".analog");
const digitalClockContainer = document.querySelector(".digital-clock");
const now = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "Friday",
  "Saturday",
];
const monthArray = [
  "January",
  "Februry",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const weekday = now.getDay();
////// mode Element
const modeButton = document.querySelector(".mode-btn");
const dayMode = document.querySelector(".day");
const nightMode = document.querySelector(".night");
let mode = false;
const clockContainer = document.querySelector(".container");
const iconsEl = document.querySelectorAll(".icons");
const inputsEl = document.querySelectorAll(".input");

// World Clock Elements

const plusButton = document.querySelector(".plus-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const searchInfo = document.querySelector(".search-info");
const addCity = document.querySelector(".add-city");
//result of data displaying in ui
const searchData = document.querySelector(".search-data");
const worldClockContainer = document.querySelector(".world-clock--container");
const apiKeyTime = "DX4CPT6ZD0PG";
const apiURLTime =
  "https://api.timezonedb.com/v2.1/get-time-zone?format=json&by=position&key=";
const apiURLZone =
  "http://api.timezonedb.com/v2.1/get-time-zone?format=json&by=zone&zone=";
let lat, lng, time, city, temp, state, stateCity, differenceTime;

// STOPWATCH Elements

const hourStopwatch = document.querySelector(".hour-stopwatch");
const minuteStopwatch = document.querySelector(".minute-stopwatch");
const secondStopwatch = document.querySelector(".second-stopwatch");
const milliSecondStopwatch = document.querySelector(".millisecond-stopwatch");
const stopwatchTimerContainer = document.querySelector(".stopwatch-timer");
const stopwatchContainer = document.querySelector(".stopwatch-container");
const lapStopwatchButton = document.querySelector(".lap-stopwatch");
const startStopwatchButton = document.querySelector(".start-stopwatch");
const lapContainer = document.querySelector(".lap-container");
const lapTitles = document.querySelector(".lap-titles");
const lapTimer = document.querySelector(".lap-timer");
const stopwatchHour = document.querySelector(".stopwatch-hour");
const stopwatchMinute = document.querySelector(".stopwatch-minute");
const stopwatchSecond = document.querySelector(".stopwatch-second");
const stopwatchMillisecond = document.querySelector(".stopwatch-milli");
const laptimerHour = document.querySelector(".laptimer-hour");
const laptimerMinute = document.querySelector(".laptimer-minute");
const laptimerSecond = document.querySelector(".laptimer-second");
const laptimerMillisecond = document.querySelector(".laptimer-milli");
let html,
  reset,
  hourCounterLap,
  minuteCounterLap,
  secondCounterLap,
  millisecondCounterLap,
  lapIntervale,
  start,
  stop,
  resume,
  secondCounter,
  minuteCounter,
  hourCounter,
  millisecondCounter,
  lapCounter;
reset = start = resume = false;
hourCounter =
  minuteCounter =
  secondCounter =
  millisecondCounter =
  hourCounterLap =
  minuteCounterLap =
  secondCounterLap =
  millisecondCounterLap =
  lapCounter =
    0;
lapIntervale = stop = null;

//// Timer Elemets

const startTimerButton = document.querySelector(".start-timer-button");
const timerHour = document.querySelector(".hours-timer");
const timerMinute = document.querySelector(".minutes-timer");
const timerSecond = document.querySelector(".seconds-timer");
const determineTimer = document.querySelector(".determine-timer");
const startTimer = document.querySelector(".start-timer");
const totalTime = document.querySelector(".total-timer-time");
const totalHour = document.querySelector(".total-hour");
const totalMinute = document.querySelector(".total-minute");
const totalSecond = document.querySelector(".total-second");
const finishedTime = document.querySelector(".finished-time");
const timerCircle = document.querySelector(".timer-circle");
const alarm = document.querySelector(".alarm-title");
const dismissTimerBtn = document.querySelector(".dismiss");
const restartTimerBtn = document.querySelector(".restart");
const audioEl = document.querySelector(".audio-container");
let timer = null;
let stopInterval = null;
let durationTime = 0;
let hour, minute, second, hourRing, minuteRing, secondRing;
const deleteTimerBtn = document.querySelector(".delete-timer-btn");
const pauseTimerBtn = document.querySelector(".pause-timer-btn");
let resumeBtn = false;

/// change mode

modeButton.addEventListener("click", function () {
  if (!mode) {
    mode = true;
    document.querySelector(".night").classList.remove("hidden");
    document.querySelector(".day").classList.add("hidden");
    clockContainer.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    weatherContainer.style.backgroundColor = "#9a49ff";
    weatherContainer.style.color = "#fff";
    iconsEl.forEach((icon) => (icon.style.fill = "#000"));
    inputsEl.forEach((input) => (input.style.color = "#000"));
    document.querySelector(".timer-time").style.color = "#000";
    stopwatchContainer.style.color = "#000";
    digitalClockContainer.style.color = "#000";
    audioEl.style.backgroundColor = "#9a49ff";
    audioEl.style.color = "#fff";
    searchInput.style.color = "#000";
    searchBox.style.color = "#000";
    searchInfo.style.color = "#000";
    searchData.style.color = "#000";
    searchData.style.backgroundColor = "#9a49ff";
    analogContainer.style.backgroundColor = "#222";
    // worldClockContainer.style.color = "#000";
    document.querySelector(".timer-title").style.color = "#000";
    document.querySelector(".world-clock--title").style.color = "#000";
    document.querySelector(".today-date").style.color = "#000";
  } else {
    //night style
    mode = false;
    document.querySelector(".night").classList.add("hidden");
    document.querySelector(".day").classList.remove("hidden");
    clockContainer.style.backgroundColor = "#0e121b";
    document.body.style.color = "#fff";
    weatherContainer.style.backgroundColor = "#fff";
    weatherContainer.style.color = "#000";
    iconsEl.forEach((icon) => (icon.style.fill = "#9a49ff"));
    inputsEl.forEach((input) => (input.style.color = "#fff"));
    document.querySelector(".timer-time").style.color = "#fff";
    stopwatchContainer.style.color = "#fff";
    digitalClockContainer.style.color = "#fff";
    audioEl.style.backgroundColor = "#fff";
    audioEl.style.color = "#000";
    searchInput.style.color = "#fff";
    searchBox.style.color = "#ffff";
    searchInfo.style.color = "#fff";
    searchData.style.color = "#000";
    searchData.style.backgroundColor = "#ffff";
    analogContainer.style.backgroundColor = "#fff";
    document.querySelector(".timer-title").style.color = "#fff";
    document.querySelector(".world-clock--title").style.color = "#fff";
    document.querySelector(".today-date").style.color = "#fff";
  }
});

////// operation tab component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operation__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");
  tabs.forEach((t) =>
    t === clicked
      ? (clicked.style.fill = "#9a49ff")
      : (t.style.fill = "#4a4d55")
  );
  clicked.style.fill = "#9a49ff";
  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//// Clock ///////////
//////analog or digital //////////////////

const analogImg = document.querySelector(".analog-img");
const digitalImg = document.querySelector(".digital-img");
analogButton.addEventListener("click", function () {
  analogContainer.classList.toggle("hidden");
  digitalClockContainer.classList.toggle("hidden");
  analogImg.classList.toggle("hidden");
  digitalImg.classList.toggle("hidden");
});
/////// weather /////////

const imageWeather = document.querySelector(".weather-img");
const checkWeather = async function (city) {
  const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
  const data = await response.json();
  if (response.status !== 200) return;
  document.querySelector(".tempp").innerHTML = `${Math.trunc(
    data.main.temp
  )} °C`;
  document.querySelector(".wind-rate").innerHTML = `${Math.trunc(
    data.wind.speed
  )} km/h`;
  document.querySelector(".humidity-percentage").innerHTML = `${Math.trunc(
    data.main.humidity
  )} %`;
  document.querySelector(".state").innerHTML = `${data.weather[0].main}`;
  if (data.weather[0].main === "Clear") {
    imageWeather.setAttribute("src", "images/Clear.png");
  }
  if (data.weather[0].main === "Clouds") {
    imageWeather.setAttribute("src", "images/Clouds.png");
  }
  if (data.weather[0].main === "Snow") {
    imageWeather.setAttribute("src", "images/Snow.png");
  }
  if (data.weather[0].main === "Rain") {
    imageWeather.setAttribute("src", "images/Rain.png");
  }

  if (data.weather[0].main === "Fog") {
    imageWeather.setAttribute("src", "images/Fog.png");
  }
  // if (data.weather[0].main === "Drizzle") {
  //   imageWeather.setAttribute("src", "images/Drizzle.png");
  // }
  else {
    imageWeather.setAttribute("src", "images/general.png");
  }
};

const weatherButton = document.querySelector(".weather-btn");
const weatherContainer = document.querySelector(".weather-container");
weatherButton.addEventListener("click", function () {
  checkWeather("Sirjan");
  weatherContainer.classList.toggle("hidden");
});
// Clock

document.querySelector(".today-date").textContent = `${weekdays[weekday]}, ${
  monthArray[month]
} ${String(date).padStart(2, 0)}, ${year}`;
// digital clock
const tick = function () {
  const now = new Date();
  let hour = String(now.getHours()).padStart(2, 0);
  const minute = String(now.getMinutes()).padStart(2, 0);
  const second = String(now.getSeconds()).padStart(2, 0);
  if (hour > 12) {
    hour = String(+hour - 12).padStart(2, 0);

    document.querySelector(".pm_am--state").textContent = "PM";
  } else {
    document.querySelector(".pm_am--state").textContent = "AM";
  }
  labelHourTimer.innerHTML = `${hour}`;
  labelMinuteTimer.innerHTML = `${minute}`;
};

setInterval(tick, 1000);
//// Analog Clock
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90; // Adding 90 to offset the starting point
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; // Add extra rotation based on seconds
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90; // Add extra rotation based on minutes
  document.getElementById(
    "secondHand"
  ).style.transform = `rotate(${secondsDegrees}deg)`;
  document.getElementById(
    "minuteHand"
  ).style.transform = `rotate(${minutesDegrees}deg)`;
  document.getElementById(
    "hourHand"
  ).style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);

/////////////////////// World Clock /////////////////
let addCounter = 0;
searchData.classList.add("hidden");
searchInfo.classList.add("hidden");
const worldTime = async function (city) {
  const response1 = await fetch(`${apiURL}${city}&appid=${apiKey}`);
  const data1 = await response1.json();
  if (response1.status !== 200) alert("Input Invalid!");
  lng = data1.coord.lon;
  lat = data1.coord.lat;
  temp = `${Math.trunc(data1.main.temp)}`;
  state = `${data1.weather[0].description}`;
  stateCity = `${data1.weather[0].main}`;
  const response = await fetch(
    `${apiURLTime}${apiKeyTime}&lat=${lat}&lng=${lng}`
  );
  if (response.status !== 200) alert("Input Invalid!");
  const data = await response.json();
  time = data.formatted.split(" ")[1].split(":").slice(0, -1).join(":");
  generateSearchCountryData(city, time, temp, state);
};
const searchCityFunc = function () {
  searchInfo.innerHTML = "";
  searchInput.focus();
  const city = searchInput.value;
  worldTime(city);
};
const addCityToUIDisplay = function () {
  searchData.classList.remove("hidden");
  worldClockContainer.classList.add("scroll--active");
  generateCityData(searchInput.value);
  searchInput.value = "";
  searchBox.classList.add("hidden");
  searchInfo.innerHTML = "";
  searchInfo.classList.add("hidden");
};
function generateSearchCountryData(city, time, temp, state) {
  searchInfo.innerHTML = "";
  searchInfo.classList.remove("hidden");

  let hourCity2 = time.split(":")[0];
  if (hourCity2 > 12) {
    hourCity2 = hourCity2 - 12;
  }
  const minuteCity2 = time.split(":")[1];
  const timeCity1 = new Date();
  let hourCity1 = timeCity1.getHours();
  if (hourCity1 > 12) {
    hourCity1 = hourCity1 - 12;
  }
  const minuteCity1 = timeCity1.getMinutes();
  differenceTime = `${+hourCity2 - +hourCity1} : ${
    +minuteCity2 - +minuteCity1
  }`;
  differenceTime = `${Math.abs(+hourCity2 - +hourCity1)} hrs, ${Math.abs(
    +minuteCity2 - +minuteCity1
  )} mins ${+hourCity2 - +hourCity1 < 0 ? "behind" : "ahead"}`;
  const html = `<div class="city-location">
                <h3 class="city-name">${city}</h3>
                <p class="city-time">${time}</p>
              </div>
              
              <div class="city-weather">
                <div class="weather-city-show">
                <img alt="weather" src="images/${stateCity}.png" class="weather-img" />
              </div>
              <div class="main-city">
                <p class="temp-city">${temp} °C</p>
                <p class="state-city">${state}</p>
              </div>
              </div>
              <p class="city-info"> ${differenceTime}</p>
            <button class="add-city" onclick="addCityToUIDisplay()">Add</button>

              `;
  searchInfo.insertAdjacentHTML("afterbegin", html);
  searchInput.focus();
}
let cityDataContainer, removeCityBtn;
const generateCityData = function (city) {
  removeCityBtn = document.createElement("button");
  removeCityBtn.textContent = "*";
  removeCityBtn.className = "close";
  searchData.appendChild(removeCityBtn);
  cityDataContainer = document.createElement("div");
  cityDataContainer.innerHTML = `
 <div class="city-location">
                <h3 class="city-name">${city}</h3>
                <p class="city-time">${time}</p>
              </div>
              
              <div class="city-weather">
                <div class="weather-city-show">
                <img alt="weather" src="images/${stateCity}.png" class="weather-img" />
              </div>
              <div class="main-city">
                <p class="temp-city">${temp} °C</p>
                <p class="state-city">${state}</p>
              </div>
              </div>
              <p class="city-info"> ${differenceTime}
              </p><div class="line"></div>`;
  removeCityBtn.addEventListener("click", function () {
    cityDataContainer.remove();
    removeCityBtn.remove();
  });
  searchData.appendChild(cityDataContainer);
};

plusButton.addEventListener("click", function () {
  searchData.classList.add("hidden");
  searchBox.classList.remove("hidden");
  searchInput.value = "";
  searchInput.focus();
  searchInfo.innerHTML = "";
  worldClockContainer.classList.remove("scroll--active");
});
searchButton.addEventListener("click", searchCityFunc);

worldClockContainer.addEventListener("keydown", function (e) {
  if (e.key === "Enter") searchCityFunc();
});
//////////////////////////////////////// Stopwatch ////////////////////////////////////////////////

lapContainer.classList.remove("lap--active");
const updateStopwatchLapDisplay = function () {
  if (
    !millisecondCounterLap &&
    !secondCounterLap &&
    !minuteCounterLap &&
    !hourCounterLap
  )
    return;
  if (!hourCounterLap) {
    hourCounterLap = 0;
    lapTimer.innerHTML = `${
      minuteCounterLap ? String(minuteCounterLap).padStart(2, 0) : "00"
    } : ${
      secondCounterLap ? String(secondCounterLap).padStart(2, 0) : "00"
    } : ${
      millisecondCounterLap
        ? String((millisecondCounterLap / 11).toFixed(0).padStart(2, 0))
        : "00"
    }`;
  }

  if (hourCounterLap)
    lapTimer.innerHTML = `${
      hourCounterLap ? String(hourCounterLap).padStart(2, 0) : "00"
    } : ${
      minuteCounterLap ? String(minuteCounterLap).padStart(2, 0) : "00"
    } : ${
      secondCounterLap ? String(secondCounterLap).padStart(2, 0) : "00"
    } : ${
      millisecondCounterLap
        ? String((millisecondCounterLap / 11).toFixed(0).padStart(2, 0))
        : "00"
    }`;
};
const stopwatchTimer = function () {
  if (!stop) {
    stop = setInterval(function () {
      millisecondCounter += 10;
      stopwatchMillisecond.innerHTML = String(
        (millisecondCounter / 11).toFixed(0).padStart(2, 0)
      );
      if (millisecondCounter > 1000) {
        secondCounter++;
        millisecondCounter = 0;
        stopwatchSecond.innerHTML = String(secondCounter).padStart(2, 0);
        stopwatchMillisecond.innerHTML = String(
          (millisecondCounter / 11).toFixed(0).padStart(2, 0)
        );
      }
      if (secondCounter > 59) {
        minuteCounter++;
        secondCounter = 0;
        millisecondCounter = 0;
        stopwatchMillisecond.innerHTML = String(minuteCounter).padStart(2, 0);
        stopwatchSecond.innerHTML = String(secondCounter).padStart(2, 0);
        stopwatchMillisecond.innerHTML = String(
          (millisecondCounter / 11).toFixed(0).padStart(2, 0)
        );
      }
      if (minuteCounter > 59) {
        hourCounter++;
        minuteCounter = 0;
        secondCounter = 0;
        millisecondCounter = 0;
        stopwatchHour.innerHTML = String(hourCounter).padStart(2, 0);
        stopwatchMinute.innerHTML = String(minuteCounter).padStart(2, 0);
        stopwatchSecond.innerHTML = String(secondCounter).padStart(2, 0);
        stopwatchMillisecond.innerHTML = String(
          (millisecondCounter / 11).toFixed(0).padStart(2, 0)
        );
      }
    }, 10);
  }
};
const stopTimer = function () {
  clearInterval(stop);
  stop = null;
};
const lapTimerFunc = function () {
  if (!lapIntervale) {
    lapIntervale = setInterval(function () {
      millisecondCounterLap += 10;
      laptimerMillisecond.innerHTML = String(
        (millisecondCounterLap / 11).toFixed(0).padStart(2, 0)
      );
      if (millisecondCounterLap > 1000) {
        secondCounterLap++;
        millisecondCounterLap = 0;
        laptimerSecond.innerHTML = String(secondCounterLap).padStart(2, 0);
        laptimerMillisecond.innerHTML = String(
          (millisecondCounterLap / 11).toFixed(0).padStart(2, 0)
        );
      }
      if (secondCounterLap > 59) {
        minuteCounterLap++;
        secondCounterLap = 0;
        millisecondCounterLap = 0;
        laptimerMinute.innerHTML = String(minuteCounterLap).padStart(2, 0);
        laptimerSecond.innerHTML = String(secondCounterLap).padStart(2, 0);
        laptimerMillisecond.innerHTML = String(
          (millisecondCounterLap / 11).toFixed(0).padStart(2, 0)
        );
      }
      if (minuteCounterLap > 59) {
        hourCounterLap++;
        hourStopwatch.style.display = "block";
        minuteCounterLap = 0;
        secondCounterLap = 0;
        millisecondCounterLap = 0;
        laptimerHour.innerHTML = String(hourCounterLap).padStart(2, 0);
        laptimerMinute.innerHTML = String(minuteCounterLap).padStart(2, 0);
        laptimerSecond.innerHTML = String(secondCounterLap).padStart(2, 0);
        laptimerMillisecond.innerHTML = String(
          (millisecondCounterLap / 11).toFixed(0).padStart(2, 0)
        );
      }
    }, 10);
  }
};

const generateLapContainer = function () {
  html = !hourCounter
    ? ` <div class="letter-spacing lap-data lap-container">
              <p class="letter-spacing">${String(lapCounter).padStart(2, 0)}</p>
              <p class="letter-spacing">${String(minuteCounterLap).padStart(
                2,
                0
              )}:${String(secondCounterLap).padStart(2, 0)}.${String(
        Math.floor(millisecondCounterLap / 11)
      ).padStart(2, 0)}</p>
              <p class="letter-spacing overall-time">${String(
                minuteCounter
              ).padStart(2, 0)}:${String(secondCounter).padStart(
        2,
        0
      )}.${String(Math.floor(millisecondCounter / 11)).padStart(2, 0)}</p>
            </div>`
    : ` <div class="letter-spacing lap-data lap-container">
              <p class="letter-spacing">${String(lapCounter).padStart(2, 0)}</p>
              <p class="letter-spacing">${String(hourCounterLap).padStart(
                2,
                0
              )}:${String(minuteCounterLap).padStart(2, 0)} : ${String(
        secondCounterLap
      ).padStart(2, 0)}.${String(
        Math.floor(millisecondCounterLap / 11)
      ).padStart(2, 0)}</p>
              <p class="letter-spacing overall-time">${String(
                hourCounter
              ).padStart(2, 0)}:${String(minuteCounter).padStart(
        2,
        0
      )}:${String(secondCounter).padStart(2, 0)}.${String(
        Math.floor(millisecondCounter / 11)
      ).padStart(2, 0)}</p>
            </div>`;

  lapContainer.insertAdjacentHTML("afterbegin", html);
};

startStopwatchButton.addEventListener("click", function () {
  if (!start) {
    reset = false;
    stopTimer();
    start = true;
    startStopwatchButton.classList.add("stop-stopwatch");
    startStopwatchButton.innerHTML = "Stop";
    stopwatchTimer();
    lapTimerFunc();
  } else {
    if (!resume) {
      resume = true;
      startStopwatchButton.classList.add("resume-stopwatch");
      startStopwatchButton.classList.remove("stop-stopwatch");
      startStopwatchButton.innerHTML = "Resume";
      lapStopwatchButton.innerHTML = "Reset";
      reset = true;
      stopTimer();
      clearInterval(lapIntervale);
      lapIntervale = null;
    } else {
      resume = false;
      startStopwatchButton.classList.add("stop-stopwatch");
      startStopwatchButton.classList.remove("resume-stopwatch");
      startStopwatchButton.innerHTML = "Stop";
      lapStopwatchButton.innerHTML = "Lap";
      reset = false;
      stopwatchTimer();
      lapTimerFunc();
    }
  }
});

lapStopwatchButton.addEventListener("click", function () {
  if (!start) return;

  if (reset) {
    lapTimer.classList.add("hidden");
    lapTitles.classList.add("hidden");
    hourCounter = minuteCounter = secondCounter = millisecondCounter = 0;
    stopwatchHour.innerHTML = "00";
    stopwatchMinute.innerHTML = "00";
    stopwatchMillisecond.innerHTML = "00";
    stopwatchSecond.innerHTML = "00";
    hourCounterLap =
      minuteCounterLap =
      secondCounterLap =
      millisecondCounterLap =
        0;
    laptimerHour.innerHTML = "00";
    laptimerMinute.innerHTML = "00";
    laptimerMillisecond.innerHTML = "00";
    laptimerSecond.innerHTML = "00";

    start = resume = reset = false;
    startStopwatchButton.classList.remove("resume-stopwatch");
    startStopwatchButton.classList.remove("stop-stopwatch");
    startStopwatchButton.innerHTML = "Start";
    lapStopwatchButton.innerHTML = "Lap";
    lapContainer.innerHTML = "";
    lapContainer.classList.remove("scroll--active");
    stopTimer();
    lapCounter = 0;
  } else {
    lapContainer.classList.add("scroll--active");
    lapCounter++;
    lapTimer.classList.remove("hidden");
    lapTitles.classList.remove("hidden");
    lapTimerFunc();
    generateLapContainer();
    hourCounterLap = 0;
    minuteCounterLap = 0;
    secondCounterLap = 0;
    millisecondCounterLap = 0;
  }
});

/////// Timer /////////////////////

const runReverseTimer = function () {
  if (!stopInterval) {
    stopInterval = setInterval(function () {
      second++;
      document.querySelector(".reverse-second").innerHTML = String(
        second
      ).padStart(2, 0);
      totalSecond.innerHTML = String(second).padStart(2, 0);
      totalHour.innerHTML = "- 00";

      if (second >= 60) {
        minute++;
        second = 0;
        document.querySelector(".reverse-second").innerHTML = String(
          second
        ).padStart(2, 0);
        totalSecond.innerHTML = String(second).padStart(2, 0);
        totalHour.innerHTML = "- 00";
        document.querySelector(".reverse-minute").innerHTML = String(
          minute
        ).padStart(2, 0);
        totalMinute.innerHTML = String(minute).padStart(2, 0);
        if (minute > 59) {
          hour++;
          minute = 0;
          document.querySelector(".reverse-minute").innerHTML = String(
            minute
          ).padStart(2, 0);
          totalMinute.innerHTML = String(minute).padStart(2, 0);
          document.querySelector(".reverse-hour").innerHTML = String(
            hour
          ).padStart(2, 0);
          totalHour.innerHTML = `- ${String(hour).padStart(2, 0)}`;
        }
      }
    }, 1000);
  }
};
const runTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      if (second < 1) {
        second = 0;
        totalSecond.innerHTML = String(second).padStart(2, 0);
      } else {
        +second--;
        totalSecond.innerHTML = String(second).padStart(2, 0);
      }
      if (second == 0) {
        +minute--;

        if (minute < 0) {
          minute = 0;
          totalMinute.innerHTML = String(minute).padStart(2, 0);
        } else {
          second = 60;
          totalSecond.innerHTML = String(second).padStart(2, 0);
          totalMinute.innerHTML = String(minute).padStart(2, 0);
        }

        if (second == 0 && minute == 0) {
          +hour--;
          if (hour < 0) {
            second = minute = hour = 0;
            clearInterval(timer);
            timer = null;
            audioEl.classList.remove("hidden");
            finishedTime.innerHTML = "Time's up";
            alarm.innerHTML = `<audio preload loop autoplay class="hidden">
                  <source src="multimedia/song.mp3" type="audio/mp3" />
                </audio> Clock    ${String(hourRing).padStart(2, 0)}:${String(
              minuteRing
            ).padStart(2, 0)}`;
            runReverseTimer();
          } else {
            minute = 59;
            second = 60;
            totalSecond.innerHTML = String(second).padStart(2, 0);
            totalMinute.innerHTML = String(minute).padStart(2, 0);
            totalHour.innerHTML = String(hour).padStart(2, 0);
          }
        }
      }
    }, 1000);
  }
};
startTimerButton.addEventListener("click", function () {
  timerCircle.classList.remove("hidden");
  hour = timerHour.value;
  minute = timerMinute.value;
  second = timerSecond.value;
  if (hour < 0 || minute < 0 || second < 0) return;
  if (!hour && !minute && !second) return;
  if (minute > 59 || second > 59) return;
  determineTimer.classList.toggle("hidden");
  startTimer.classList.toggle("hidden");
  if (hour && minute && second) {
    totalTime.innerHTML = `${hour} h ${minute} m ${second} s`;
    totalHour.innerHTML = String(hour).padStart(2, 0);
    totalMinute.innerHTML = String(minute).padStart(2, 0);
    totalSecond.innerHTML = String(second).padStart(2, 0);
    durationTime = (+hour * 3600 + +minute * 60 + +second) * 1000;
  }
  if (!hour && minute && second) {
    totalTime.innerHTML = ` ${minute} m ${second} s`;
    totalHour.innerHTML = "00";
    totalMinute.innerHTML = String(minute).padStart(2, 0);
    totalSecond.innerHTML = String(second).padStart(2, 0);
    durationTime = (+minute * 60 + +second) * 1000;
  }
  if (hour && !minute && second) {
    totalTime.innerHTML = `${hour} h ${second} s`;
    totalHour.innerHTML = String(hour).padStart(2, 0);
    totalMinute.innerHTML = "00";
    totalSecond.innerHTML = String(second).padStart(2, 0);
    durationTime = (+hour * 3600 + +second) * 1000;
  }

  if (hour && minute && !second) {
    totalTime.innerHTML = `${hour} h ${minute} m`;
    totalHour.innerHTML = String(hour).padStart(2, 0);
    totalMinute.innerHTML = String(minute).padStart(2, 0);
    totalSecond.innerHTML = "00";
    durationTime = (+hour * 3600 + +minute * 60) * 1000;
  }
  if (!hour && !minute && second) {
    totalTime.innerHTML = `${second} s`;
    totalHour.innerHTML = "00";
    totalMinute.innerHTML = "00";
    totalSecond.innerHTML = String(second).padStart(2, 0);
    durationTime = +second * 1000;
  }
  if (!hour && minute && !second) {
    totalTime.innerHTML = `${minute} min`;
    totalHour.innerHTML = "00";
    totalMinute.innerHTML = String(minute).padStart(2, 0);
    totalSecond.innerHTML = "00";
    durationTime = +minute * 60000;
  }
  if (hour && !minute && !second) {
    totalTime.innerHTML = `${hour} h`;
    totalHour.innerHTML = String(hour).padStart(2, 0);
    totalMinute.innerHTML = "00";
    totalSecond.innerHTML = "00";
    durationTime = +hour * 3600000;
  }
  const date = new Date();
  hourRing = date.getHours() + +hour;
  minuteRing = date.getMinutes() + +minute;
  secondRing = date.getSeconds() + +second;
  if (hourRing > 24) {
    hourRing = hourRing - 24;
  }
  if (minuteRing > 60) {
    minuteRing = minuteRing - 60;
    hourRing++;
  }
  if (secondRing > 60) {
    secondRing = secondRing - 60;
    minuteRing++;
  }
  finishedTime.innerHTML = `${String(hourRing).padStart(2, 0)} : ${String(
    minuteRing
  ).padStart(2, 0)}`;
  runTimer();
});

deleteTimerBtn.addEventListener("click", function () {
  hour = minute = second = 0;

  resumeBtn = false;
  clearInterval(timer);
  timer = null;
  clearInterval(stopInterval);
  stopInterval = null;
  determineTimer.classList.toggle("hidden");
  startTimer.classList.toggle("hidden");
  audioEl.classList.add("hidden");
  totalHour.innerHTML = totalMinute.innerHTML = totalSecond.innerHTML = "00";
  finishedTime.innerHTML =
    timerHour.value =
    timerMinute.value =
    timerSecond.value =
      "";
  totalTime.innerHTML = "";
  alarm.innerHTML = "";
});

pauseTimerBtn.addEventListener("click", function () {
  if (!resumeBtn) {
    clearInterval(timer);
    timer = null;
    pauseTimerBtn.classList.add("resume-btn");
    pauseTimerBtn.innerHTML = "Resume";
    resumeBtn = true;
  } else {
    pauseTimerBtn.classList.remove("resume-btn");
    pauseTimerBtn.innerHTML = "Pause";
    runTimer();
    resumeBtn = false;
  }
});
dismissTimerBtn.addEventListener("click", function () {
  audioEl.classList.add("hidden");
  determineTimer.classList.toggle("hidden");
  startTimer.classList.toggle("hidden");
  hour = minute = second = 0;
  resumeBtn = false;
  clearInterval(stopInterval);
  clearInterval(timer);
  timer = null;
  stopInterval = null;
  document.querySelector(".reverse-hour").innerHTML =
    document.querySelector(".reverse-minute").innerHTML =
    document.querySelector(".reverse-second").innerHTML =
      "00";
  totalHour.innerHTML = totalMinute.innerHTML = totalSecond.innerHTML = "";
  timerHour.value = timerMinute.value = timerSecond.value = "";
  alarm.innerHTML = `Clock   ${String(hourRing).padStart(2, 0)}:${String(
    minuteRing
  ).padStart(2, 0)}`;
});
restartTimerBtn.addEventListener("click", function () {
  audioEl.classList.add("hidden");
  alarm.innerHTML = `Clock  ${String(hourRing).padStart(2, 0)}:${String(
    minuteRing
  ).padStart(2, 0)}`;
  hour = timerHour.value === "" ? 0 : +timerHour.value;
  minute = timerMinute.value === "" ? 0 : +timerMinute.value;
  second = timerSecond.value === "" ? 0 : +timerSecond.value;

  document.querySelector(".reverse-hour").innerHTML =
    document.querySelector(".reverse-minute").innerHTML =
    document.querySelector(".reverse-second").innerHTML =
      "00";
  totalHour.innerHTML = String(hour).padStart(2, 0);
  totalMinute.innerHTML = String(minute).padStart(2, 0);
  totalSecond.innerHTML = String(second).padStart(2, 0);
  clearInterval(stopInterval);
  stopInterval = null;
  timer = null;
  runTimer();
  finishedTime.innerHTML = `${String(hourRing).padStart(2, 0)} : ${String(
    minuteRing
  ).padStart(2, 0)}`;
  alarm.innerHTML = `Clock   ${String(hourRing).padStart(2, 0)}:${String(
    minuteRing
  ).padStart(2, 0)}`;
});
