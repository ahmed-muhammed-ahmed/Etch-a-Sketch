const container = document.querySelector(".container");
const button = document.querySelector(".btn");

let result = [];

function createGrid(numberOfSquares) {
  container.textContent = "";
  let width = 600 / numberOfSquares;

  for (let i = 1; i <= numberOfSquares * numberOfSquares; i++) {
    let box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${width}px`;
    box.addEventListener("mouseover", handleSquareHover);
    result.push(box);
  }
  return result;
}

function handleSquareHover() {
  this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

container.append(...createGrid(4));

button.addEventListener("click", function () {
  const input = Number(prompt("Enter number of square per side do you want? "));
  if (!isNaN(input) && input > 0 && input <= 100) {
    result = [];
    container.append(...createGrid(input));
  } else {
    alert("Please enter the number between 1 and 100.");
  }
});
