const container = document.querySelector(".container");
const clear = document.querySelector(".clear");


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
  square.style.backgroundColor = "black";
}

const button = document.getElementById('clear');
button.addEventListener('click', newGrid);
    
function getNewGrid() {
    container.innerText = '';
}

function newGrid(){
    getNewGrid();
      let number = prompt("How many squares per side for the new grid?" );
       createGrid(number);
};









   
 


