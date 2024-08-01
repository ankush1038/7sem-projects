const timer = document.getElementById("timer");
const lapList = document.getElementById("list");
var sec = 0;
var min = 0;
var hr = 0;
var timerstop = true;

window.onload = function () {
  if (localStorage.getItem("timerValues")) {
    const storedValues = JSON.parse(localStorage.getItem("timerValues"));
    sec = storedValues.sec;
    min = storedValues.min;
    hr = storedValues.hr;
    timerstop = storedValues.timerstop;

    if (!timerstop) {
      timecycle();
    }
    updateTimerDisplay();
  }

  if (localStorage.getItem("lapTimes")) {
    const lapTimes = JSON.parse(localStorage.getItem("lapTimes"));
    lapTimes.forEach((lap) => {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(lap));
      lapList.appendChild(li);
    });
  }
};

function startTimer() {
  if (timerstop == true) {
    timerstop = false;
    timecycle();
  }
}

function stopTimer() {
  if (timerstop == false) {
    timerstop = true;
  }
}

function timecycle() {
  if (timerstop == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    updateTimerDisplay();
    saveTimerValuesToLocalStorage();
    setTimeout(timecycle, 1000);
  }
}

function updateTimerDisplay() {
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  timer.innerHTML = hr + ":" + min + ":" + sec;
}

function onLap() {
  var li = document.createElement("li");
  var text = document.createTextNode(document.getElementById("timer").innerText);
  li.appendChild(text);
  lapList.appendChild(li);
  saveLapTimesToLocalStorage();
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  timerstop = true;
  hr = 0;
  sec = 0;
  min = 0;
  saveTimerValuesToLocalStorage();
}

function resetEverything() {
  resetTimer();
  lapList.innerHTML = "";
  localStorage.removeItem("timerValues");
  localStorage.removeItem("lapTimes");
}

function saveTimerValuesToLocalStorage() {
  localStorage.setItem(
    "timerValues",
    JSON.stringify({ sec: sec, min: min, hr: hr, timerstop: timerstop })
  );
}

function saveLapTimesToLocalStorage() {
  const lapTimes = [];
  lapList.querySelectorAll("li").forEach((li) => {
    lapTimes.push(li.innerText);
  });
  localStorage.setItem("lapTimes", JSON.stringify(lapTimes));
}