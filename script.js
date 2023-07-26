let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
// let msec = document.querySelector("#msec");
// let msecs = 0
let secs = 1,
  mins = 0,
  hrs = 0;
// let msecId;
let secId;
let isStart = false;
let is0thTime = false;
function start() {
  if (!isStart) {
    isStart = true;
    if (!is0thTime) {
      is0thTime = true;
      sec.innerHTML = "01";
    }
    //   msecId = setInterval(increaseMilliSeconds, 1);
    secId = setInterval(increaseSeconds, 1000);
  }
}

function stop() {
  isStart = false;
  //   clearInterval(msecId);
  clearInterval(secId);
}

function reset() {
  //   clearInterval(msecId);
  clearInterval(secId);
  isStart = false;
  is0thTime = false;
  //   msecs = 0;
  //   msec.innerHTML = "000";
  secs = 0;
  sec.innerHTML = "00";
  mins = 0;
  min.innerHTML = "00";
  hrs = 0;
  hr.innerHTML = "00";
}

// function increaseMilliSeconds() {
//   msecs++;
//   if (msecs === 1000) {
//     msecs = 0;
//     msec.innerHTML = "000";
//     increaseSeconds();
//   } else {
//     if ((msecs + "").length === 1) {
//       msec.innerHTML = "00" + msecs;
//     } else if ((msecs + "").length === 2) {
//       msec.innerHTML = "0" + msecs;
//     } else {
//       msec.innerHTML = msecs;
//     }
//   }
// }

function increaseSeconds() {
  secs++;
  if (secs === 60) {
    secs = 0;
    sec.innerHTML = "00";
    increaseMinutes();
  } else {
    if ((secs + "").length === 1) {
      sec.innerHTML = "0" + secs;
    } else {
      sec.innerHTML = secs;
    }
  }
}

function increaseMinutes() {
  mins++;
  if (mins === 60) {
    mins = 0;
    min.innerHTML = "00";
    increaseHours();
  } else {
    if ((mins + "").length === 1) {
      min.innerHTML = "0" + mins;
    } else {
      min.innerHTML = mins;
    }
  }
}

function increaseHours() {
  hrs++;
  if ((hrs + "").length === 1) {
    hr.innerHTML = "0" + hrs;
  } else {
    hr.innerHTML = hrs;
  }
}

//Timer

let timerButton = document.querySelector("#tr");
let stopwatchButton = document.querySelector("#sw");
let counter = document.querySelector("#timer");
let stopwatch = document.querySelector("#stopwatch");

function timer() {
  stopwatch.style = "display:none";
  counter.style = "display:flex";
  timerButton.style =
    "background-color: #404040;border-radius: 0px 10px 0px 0px;";
  stopwatchButton.style =
    " background-color: #181818;border-radius: 10px 0px 10px 0px;";
    
  reset();
}

function stopWatch() {
  stopwatch.style = "display:flex";
  counter.style = "display:none";
  timerButton.style =
    "background-color: #181818;border-radius: 0px 0px 0px 10px;";
  stopwatchButton.style =
    " background-color: #404040;border-radius: 10px 10px 0px 0px;";

  tReset();
}

//Timer Function

let thr = document.querySelector("#thr");
let tmin = document.querySelector("#tmin");
let tsec = document.querySelector("#tsec");
let thrs = 0,
  tmins = 0,
  tsecs = 0;
let tsecId = 0;
let istStart = false;

function timeCorrector(h, m, s) {
  if (s > 59) {
    m += parseInt(s / 60);
    s = s % 60;
  }

  if (m > 59) {
    h += parseInt(m / 60);
    m = m % 60;
  }

  thrs = h;
  tmins = m;
  tsecs = s;
  if ((h + "").length == 1) {
    thr.innerHTML = "0" + h;
  } else {
    thr.innerHTML = h;
  }

  if ((m + "").length == 1) {
    tmin.innerHTML = "0" + m;
  } else {
    tmin.innerHTML = m;
  }

  if ((s + "").length == 1) {
    tsec.innerHTML = "0" + s;
  } else {
    tsec.innerHTML = s;
  }
  // console.log(h + ":" + m + ":" + s);
}

function tStart() {
  if (!istStart) {
    istStart = true;
    thrs = parseInt(thr.innerHTML);
    tmins = parseInt(tmin.innerHTML);
    tsecs = parseInt(tsec.innerHTML);

    timeCorrector(thrs, tmins, tsecs);

    tsecId = setInterval(decreaseSeconds, 1000);
  }
  reset();
}

function tStop() {
  istStart = false;
  clearInterval(tsecId);
}

function tReset() {
  istStart = false;
  clearInterval(tsecId);
  tsec.innerHTML = "00";
  thr.innerHTML = "00";
  tmin.innerHTML = "00";
}

function decreaseSeconds() {
  tsecs--;
  if (tsecs === 0 && tmins > 0) {
    decreaseMinutes();
  }
  if (tsecs === 0 && tmins === 0 && thrs === 0) {
    clearInterval(tsecId);
    tsec.innerHTML = "00";
    thr.innerHTML = "00";
    tmin.innerHTML = "00";
  } else {
    if (tsecs <= 0) {
      decreaseMinutes();
    } else {
      if ((tsecs + "").length == 1) {
        tsec.innerHTML = "0" + tsecs;
      } else {
        tsec.innerHTML = tsecs;
      }
    }
  }
}

function decreaseMinutes() {
  tmins--;
  tsecs = 59;
  if (tmins <= 0 && thrs > 0) {
    decreaseHours();
  } else {
    if ((tmins + "").length == 1) {
      tmin.innerHTML = "0" + tmins;
    } else {
      tmin.innerHTML = tmins;
    }
    tsec.innerHTML = 59;
  }
}

function decreaseHours() {
  thrs--;
  tmins = 59;
  tsecs = 59;
  if ((thrs + "").length == 1) {
    thr.innerHTML = "0" + thrs;
  } else {
    thr.innerHTML = thrs;
  }
  tmin.innerHTML = 59;
  tsec.innerHTML = 59;
}
