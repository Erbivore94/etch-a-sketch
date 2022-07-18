const grid = document.querySelector("#grid");
const gridSize = 600;
let cell;
let cellCount = 16;

createCells();
draw();

function createCells() {
  let cellSize = cellCount => gridSize / cellCount;

  for (i = 0; i < cellCount; i++) {
    for (j = 0; j < cellCount; j++) {
      cell = document.createElement("div");
      cell.setAttribute("style", `background-color: yellow; width: ${cellSize(cellCount)}px; height: ${cellSize(cellCount)}px;`);
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

function draw() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "blue";
    console.log("Clicked on cell");
    });
  });
}