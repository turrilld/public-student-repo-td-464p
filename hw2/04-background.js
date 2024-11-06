// Add your code here

const body = document.querySelector("body");
const intervalSeconds = document.getElementById("interval");

const startStopButton = document.getElementById("start-stop-button");
startStopButton.addEventListener("click", handleStartClick);

setBackgroundRandomColor();
let interval;

function handleStartClick() {
  if (startStopButton.classList == "btn btn-primary") {
    if (intervalSeconds.value > 0) {
      interval = setInterval(setBackgroundRandomColor, 1000 * intervalSeconds.value);
      startStopButton.value = "Stop";
      startStopButton.classList = "btn btn-danger";
    } else {
      window.alert("Interval needs to be a positive number");
    }
  } else {
    clearInterval(interval);
    interval = undefined;
    startStopButton.value = "Start";
    startStopButton.classList = "btn btn-primary";
  }
}

function setBackgroundRandomColor() {
  body.style = "background-color: " + getRandomColorWithLowAlpha();
}

function getRandomColorWithLowAlpha() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = Math.random() * 1;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
