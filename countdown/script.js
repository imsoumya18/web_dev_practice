let clock = document.getElementById("clock");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let i = 5 * 60;

start.addEventListener("click", function () {
  let interval = setInterval(function () {
    let min = Math.floor(i / 60);
    let sec = i - min * 60;

    if (min < 10) min = "0" + min.toString();
    else min = min.toString();

    if (sec < 10) sec = "0" + sec.toString();
    else sec = sec.toString();

    let text = min.toString() + ":" + sec.toString();
    clock.innerText = text;

    if (i <= 0) clearInterval(interval);
    i--;
  }, 1000);
});

reset.addEventListener("click", function () {
  i = 0;
});
