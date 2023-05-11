generateGrid();
const button = document.querySelector(".reset");
button.addEventListener("click", reset);

function generateGrid() {
  const sketchContainer = document.createElement("div");
  document.body.appendChild(sketchContainer);
  sketchContainer.classList.add("sketchContainer");

  sketchContainer.addEventListener("mouseover", changeColor);
}