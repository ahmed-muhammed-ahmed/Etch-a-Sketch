const container = document.querySelector(".container");
const button = document.querySelector(".btn");

const color = [
  "#c92a2a",
  "#c2255c",
  "#212529",
  "#087f5b",
  "#5f3dc4",
  "#fa5252",
  "#ae3ec9",
  "#f76707",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#1864ab",
  "#fa5252",
  "#c92a2a",
  "#63e6be",
  "#212529",
  "#33220f",
  "#862e9c",
  "#fa5252",
  "#0b7285",
  "#1864ab",
  "#fa5252",
  "#862e9c",
];
let result = [];

function getDivElement(numberOfSquares) {
  let width = 600 / numberOfSquares;
  let box = document.createElement("div");

  for (let i = 1; i <= numberOfSquares * numberOfSquares; i++) {
    box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${width}px`;
    box.style.backgroundColor = `${color[i]}`;
    result.push(box);
  }

  return result;
}

container.append(...getDivElement(4));

button.addEventListener("click", () => {
  const numberOfSquares = Number(
    prompt("How many number of squares per side do you want? ")
  );

  width = 600 / numberOfSquares;
  container.append(...getDivElement(numberOfSquares));
});
