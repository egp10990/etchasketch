generateDefaultGrid();
placeEventListenersOnTiles();
const button = document.querySelector(".reset");
button.addEventListener("click", reset);

function generateDefaultGrid() {
  const sketchContainer = document.createElement("div");
  document.body.appendChild(sketchContainer);
  sketchContainer.classList.add("sketchContainer");
  const gridTile = document.createElement("div");
  sketchContainer.appendChild(gridTile);
  gridTile.classList.add("gridTile");
  let clonedTile;
  for (let i = 0; i < 16 * 16 - 1; i++) {
    clonedTile = gridTile.cloneNode();
    sketchContainer.appendChild(clonedTile);
  }
}

function placeEventListenersOnTiles() {
  let allTiles = document.querySelectorAll(".gridTile");
  allTiles.forEach(element => {
    element.addEventListener("mouseover", changeColor);
  });
}

function changeColor() {
  this.classList.add("tileHovered");
}

function reset() {
  let allTiles = document.querySelectorAll(".tileHovered");
  allTiles.forEach(element => {
    element.classList.remove("tileHovered");
  });
  resizeGrid();
}

function resizeGrid() {
  let newSize = prompt("How many squares do you want per side of the Etch-a-Sketch?", "Please insert a number inferior or equal to 100.");
  if (newSize > 100) {
    newSize = prompt("Sorry, that number is too high!", "Please insert a number inferior or equal to 100.");
  } else if (Math.sign(newSize) == 0 || Math.sign(newSize) == -1) { 
    newSize = prompt("Only integers between 1 and 100, please!", "Please insert a number inferior or equal to 100.");
  } else if (newSize === null) {
    generateDefaultGrid();
  } else {
    const styleSheet = document.styleSheets[0];
    styleSheet.cssRules[2].style.gridTemplateRows = `repeat(${newSize}, auto)`;
    styleSheet.cssRules[2].style.gridTemplateColumns = `repeat(${newSize}, auto)`;
    removeAllTiles();
    generateUserGrid(newSize);
  }
}

function removeAllTiles() {
  let container = document.querySelector(".sketchContainer");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function generateUserGrid(newSize) {
  const sketchContainer = document.getElementsByClassName("sketchContainer");
  const gridTile = document.createElement("div");
  sketchContainer[0].appendChild(gridTile);
  gridTile.classList.add("gridTile");
  let clonedTile;
  for (let i = 0; i < newSize * newSize - 1; i++) {
    clonedTile = gridTile.cloneNode();
    sketchContainer[0].appendChild(clonedTile);
  }
  placeEventListenersOnTiles();
}