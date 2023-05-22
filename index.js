const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const gridSize = document.querySelector(".gridsize");
const submit = document.querySelector(".submit");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");


function createGrid(rows, columns) {
  let total = (rows * columns);
  for(let i = 0; i < total; i++) {
    let childDiv = document.createElement('childdiv');
    childDiv.classList.add('childdiv');
    container.style.setProperty('grid-template-columns', `repeat(${columns}, 2fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`);
    container.appendChild(childDiv);
    childDiv.addEventListener("mouseover", mouseOver);
  }
};

createGrid(16,16);

function mouseOver () {
  let childDiv = document.querySelector(".childdiv");
  childDiv.style.backgroundColor = "black"; 
}



   
 


