let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let msec = document.querySelector("#msec");
let msecs = 0,
  secs = 0,
  mins = 0,
  hrs = 0;
// let msecId;
let secId;
function start() {
  isStop = false;
  //   msecId = setInterval(increaseMilliSeconds, 1);
  secId = setInterval(increaseSeconds, 1000);
}

function stop() {
  isStop = true;
  //   clearInterval(msecId);
  clearInterval(secId);
}

function reset() {
  //   clearInterval(msecId);
  clearInterval(secId);
  isStop = false;
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
