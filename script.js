let gridContainer = document.getElementById("grid-container");

// function that generates the number of rows and columns in a grid
function createGrid(number) {
  if (!number || number > 100 || number < 16)
    alert("Please return a number from 16 to 100");
  else
    gridContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr)`;
  // create the divs inside the grid
  for (let i = 1; i <= number ** 2; i++) {
    let gridItem = document.createElement("div");
    gridContainer.append(gridItem);
    // gridItem.style.cssText = "border: 1px solid black;";
    gridItem.addEventListener(
      "mouseover",
      (e) => (gridItem.style.backgroundColor = generateRandomColor())
    );
  }
}

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

createGrid(16);
