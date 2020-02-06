const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

function randomIntegerFromInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}
function setRandomColor() {
  const _color = colors[randomIntegerFromInterval(colors.length - 1)];
  console.log(_color);
  document.body.style.backgroundColor = _color;
}

let interval = undefined;

startButton.addEventListener(
  'click',
  e => (interval = setInterval(() => setRandomColor(), 1000)),
);

stopButton.addEventListener('click', e => clearInterval(interval));
