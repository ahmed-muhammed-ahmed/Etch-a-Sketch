# Etch-a-Sketch

This simple web application allows you to draw colorful sketches by hovering your mouse over a grid of squares. You can customize the size of the grid for a more detailed or abstract drawing experience.

## Features

- **Grid Drawing:** Hover over the squares in the grid to draw colorful patterns.
- **Random Colors:** Each square changes its color randomly as you hover over it.
- **Grid Size Customization:** Click the "Enter No of box" button to enter a new number of squares per side for the grid.

## How to Use

1. Visit the [Etch-a-Sketch GitHub Page](https://amswdeveloper.github.io/Etch-a-Sketch/) in your web browser.
2. The initial grid size is set to 4 squares per side.
3. Hover over the squares to draw, and enjoy the pixelated trail effect.
4. To change the grid size, click the "Enter No of box" button, enter a number between 1 and 100 in the prompt, and see the grid update accordingly.

## Code Overview

The main functionality is implemented in JavaScript, and the code structure is as follows:

- **HTML (`index.html`):** Contains the structure of the webpage, including a container for the grid and a button to change the grid size.
- **CSS (`style.css`):** Provides minimal styling for the grid and button.

- **JavaScript (`script.js`):**
  - `createGrid`: Dynamically generates a grid of squares based on the specified number of squares per side.
  - `handleSquareHover`: Changes the background color of a square to a random color on mouseover.
  - `getRandomColor`: Generates a random hex color code.
  - Event listeners are set up to handle mouseover events on the grid squares and button click events to change the grid size.
