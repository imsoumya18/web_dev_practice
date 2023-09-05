let clock = document.getElementById("clock");

let i = 5 * 60;

let interval = setInterval(function () {
  let min = Math.floor(i / 60);
  let sec = i - min * 60;

  if (min < 10) min = "0" + min.toString();
  else min = min.toString();

  if (sec < 10) sec = "0" + sec.toString();
  else sec = sec.toString();

  let text = min.toString() + ":" + sec.toString();
  clock.innerText = text;

  if (i == 0) clearInterval(interval);
  i--;
}, 1000);

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  i = 5 * 60;
});
