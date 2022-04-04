const container = document.querySelector('#container');
const btn = document.querySelector('#reset');
const inpt = document.querySelector('#input');
const rainbow = document.querySelector('#rainbow')
let input;

function getVal() {
  input = parseInt(inpt.value);
  if(input > 100) {
    	input = 100;
      return input;
  } else if (input === undefined || isNaN(input)) {
    	input = 10;
      return input;
    }
  return input;
}

function reset() {
  btn.addEventListener('click', () => {
    container.innerHTML = '';
    console.log(input);
    getVal();
    makeGrid(input);
  });
}

function makeGrid(grid) {
  for (i = 0; i < grid; i++) {
    let row = document.createElement('div');

    row.classList.add('row');
    container.appendChild(row);

    for (j = 0; j < grid; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
    }
  }
}

container.addEventListener('mouseover', function(event) {
	if (rainbow.checked === true) {
    let colorful = getRandomColor();
    event.target.style.backgroundColor =  `${colorful}`;
  } else if (rainbow.checked === false) {
  	event.target.style.backgroundColor =  '#999';
    }
});
      
function getRandomColor() {
  let r = Math.floor(Math.random() * 256 + 1);
  let g = Math.floor(Math.random() * 256 + 1);
  let b = Math.floor(Math.random() * 256 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

reset();
makeGrid(10);
