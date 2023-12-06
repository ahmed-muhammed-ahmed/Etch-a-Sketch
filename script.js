const container = document.querySelector(".container");

function getDivElement() {
  let result = [];
  for (let i = 0; i <= 293; i++) {
    let box = document.createElement("div");
    // box.className("square-box");
    const squareBox = document.querySelector(".square-box");
    box.style.backgroundColor = "#f8f9fa";
    box.style.width = "36px";
    box.style.height = "36px";
    box.style.border = "1px solid  #dee2e6";
    result.push(box);
  }

  return result;
}

container.append(...getDivElement());
