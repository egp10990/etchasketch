const container = document.querySelector('.container');
const square = document.getElementsByClassName('.square');
const sizeButton = document.querySelector('.newgridsize');
const clearButton = document.querySelector('.clear');


function createGrid(rows, cols) {
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
}

createGrid(16,16);

function changeColor (event) {
  const square = event.target;
  square.style.backgroundColor = 'black';
}

clearButton.addEventListener("click", clearGrid);

function clearGrid(){
  let clearGrid = document.querySelectorAll('.square');
  clearGrid.forEach(element => {
      element.style.backgroundColor = 'white';
  });
}

clearGrid();

sizeButton.addEventListener("click", newGridSize);

function newGridSize() {
  let newSize = (prompt("What size would you like your Etch-a-Sketch to be?"));
  let desiredValue = parseInt(newSize);
  if (desiredValue > 1 && desiredValue <= 100) {
    clearGrid();
    createGrid(newSize, newSize);
  } else {
    alert("Please only enter a number from 1 to 100!");
  }
}

