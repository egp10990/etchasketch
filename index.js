generateGrid();
const button = document.querySelector(".reset");
button.addEventListener("click", reset);

function generateGrid() {
  const sketchContainer = document.createElement("div");
  document.body.appendChild(sketchContainer);
  sketchContainer.classList.add("sketchContainer");

  sketchContainer.addEventListener("mouseover", changeColor);

  function changeColor(event) {
    event.target.classList.add("tileHovered");
    }
}

const gridTile = document.createElement("div");
sketchContainer.appendChild(gridTile);
gridTile.classList.add("gridTile");
let clonedTile;
for (let i = 0; i < 16 * 16 - 1; i++) {
  clonedTile = gridTile.cloneNode();
  sketchContainer.appendChild(clonedTile);
}