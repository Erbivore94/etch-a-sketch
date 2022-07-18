const gridContainer = document.querySelector("#grid-container");
const gridSize = 600;
let gridItem; 
let cellCount = 16;

createGrid();

function createGrid() {
  let cellSize = cellCount => gridSize / cellCount;

  for (i = 0; i < cellCount; i++) {
    for (j = 0; j < cellCount; j++) {
      gridItem = document.createElement("div");
      gridItem.setAttribute("style", `background-color: yellow; width: ${cellSize(cellCount)}px; height: ${cellSize(cellCount)}px;`)
      gridContainer.appendChild(gridItem);
    }
  }
}