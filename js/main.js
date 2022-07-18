const grid = document.querySelector("#grid");
const gridSize = 600;
const defaultCellCount = 16;
let input = defaultCellCount;

createCells(input);
cellCountManager();

function createCells(cellCount) {
  const cellSize = cellCount => gridSize / cellCount;

  for (i = 0; i < cellCount; i++) {
    for (j = 0; j < cellCount; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("style", `background-color: #F1FAEE; width: ${cellSize(cellCount)}px; height: ${cellSize(cellCount)}px;`);
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
  draw();
}

function draw() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "#1D3557";
    });
  });
}

function cellCountManager() {
  const cellCountButton = document.querySelector("#cell-count-button");
  cellCountButton.addEventListener("click", () => {
    let input = prompt("How many cells per axis? (Min: 8, Max: 100)");
    input = parseInt(input);
    if (input >= 8 && input <= 100) {
      removeCells();
      createCells(input);
    }
  })
}

function removeCells() {
  const cells = document.getElementsByClassName("cell");
  while (cells.length > 0) {
    cells[0].parentNode.removeChild(cells[0]);
  }
}