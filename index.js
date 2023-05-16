const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const gridSize = document.querySelector(".gridsize");
const submit = document.querySelector(".submit");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");


function createGrid(rows = 16, columns = 16) {
  let total = (rows * columns);
  for(let i = 0; i < total; i++) {
    let childDiv = document.createElement('childdiv' + i);
    childDiv.classList.add('childdiv' + i);
    container.style.setProperty('grid-template-columns', `repeat(${columns}, 2fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`);
    container.appendChild(childDiv);
  }
};
createGrid(16,16);

var divs = document.getElementsByClassName('childdiv' + i);
var mainDiv = document.getElementById('childdiv0');
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', function () {
        mainDiv.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
  }
