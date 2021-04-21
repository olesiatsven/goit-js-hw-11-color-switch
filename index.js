const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.body;
 

let start = null;

function startRandomChangeColor() {
    start = setInterval(() => {
        body.setAttribute('bgcolor', `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`,);
        startBtn.disabled = true
    }, 1000);

   
};

function stopRandomChangeColors() {
    clearInterval(start);
    startBtn.disabled = false
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', startRandomChangeColor);
stopBtn.addEventListener('click',stopRandomChangeColors);
