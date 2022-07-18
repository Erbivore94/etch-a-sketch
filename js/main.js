const grid = document.querySelector("#grid");
const gridSize = 600;
const defaultCellCount = 16;
let input = defaultCellCount;

createCells(input);
draw();
cellCountManager();

function cellCountManager() {
  const cellCountButton = document.querySelector("#cellCountButton");
  cellCountButton.addEventListener("click", () => {
    let input = prompt("How many cells per axis?");
    grid.removeChild(cell);
    createCells(input);
  })
}

function createCells(cellCount) {
  const cellSize = cellCount => gridSize / cellCount;

  for (i = 0; i < cellCount; i++) {
    for (j = 0; j < cellCount; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("style", `background-color: white; width: ${cellSize(cellCount)}px; height: ${cellSize(cellCount)}px;`);
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

function draw() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
    });
  });
}

function changeCellSize() {
  console.log("running");
}