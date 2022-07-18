const grid = document.querySelector("#grid");
const gridSize = 600;
let cells; 
let cellCount = 16;

createGrid();

function createGrid() {
  let cellSize = cellCount => gridSize / cellCount;

  for (i = 0; i < cellCount; i++) {
    for (j = 0; j < cellCount; j++) {
      cells = document.createElement("div");
      cells.setAttribute("style", `background-color: yellow; width: ${cellSize(cellCount)}px; height: ${cellSize(cellCount)}px;`)
      grid.appendChild(cells);
    }
  }
}