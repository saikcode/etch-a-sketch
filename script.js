const gridContainer = document.getElementById("grid-container");

// Genetare number of rows and columns for grid
function createGrid(number, color = "black") {
  gridContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr)`;
  // create the divs inside the grid
  for (let i = 1; i <= number ** 2; i++) {
    const gridItem = document.createElement("div");
    gridContainer.append(gridItem);
    // gridItem.style.border = "1px solid rgba(225,225,225, .3)";
    gridItem.addEventListener(
      "mouseover",
      () => (gridItem.style.backgroundColor = generateRandomColor())
    );
    // Clear grid
    const clearGrid = document.getElementById("clear-grid");
    clearGrid.addEventListener(
      "click",
      () => (gridItem.style.backgroundColor = "white")
    );
  }
}

//Change grid
const slider = document.getElementById("slider");
const displayNumberGrid = document.getElementById("displayNumberGrid");

displayNumberGrid.textContent = slider.value;
slider.oninput = () => (displayNumberGrid.textContent = slider.value);

slider.addEventListener("click", () => createGrid(slider.value));

// Hex generator for colors
function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

createGrid(16);
