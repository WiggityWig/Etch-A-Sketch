const box = document.getElementById('box');
const boxContainer = document.getElementById('box-container');

// Set the initial mode to color
let mode = 'color';

// Get the color and eraser buttons
const colorButton = document.getElementById('color');
const eraserButton = document.getElementById('eraser');

// Add event listeners to the buttons to switch between modes
colorButton.addEventListener('click', () => {
  mode = 'color';
});

eraserButton.addEventListener('click', () => {
  mode = 'eraser';
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', updateBoxCount);

const rangeSlider = document.getElementById('range-slider');
rangeSlider.addEventListener('input', updateBoxCount);

// Function to update the number of boxes
function updateBoxCount() {
  const numBoxes = rangeSlider.value;
  const boxSize = 500 / numBoxes;
  const boxContainer = document.getElementById('box-container');

  boxContainer.innerHTML = '';

  for (let i = 0; i < numBoxes ** 2; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.setAttribute('id', 'box' + i);
    boxContainer.appendChild(box);
  }

  // Update the box dimensions element
  const boxDimensions = document.getElementById('box-dimensions');
  boxDimensions.textContent = `${numBoxes} x ${numBoxes}`;

  // Add event listener to each box element
  const elements = document.querySelectorAll('.box');
  let opacities = {};
  elements.forEach((el) => {
    opacities[el.id] = 0;
    el.addEventListener('mouseover', () => {
      const id = el.id;
      if (mode === 'color') {
        opacities[id] += 0.1;}
        else if (mode === 'eraser'){
            opacities[id] -= 0.1;
        };
      el.style.backgroundColor = `rgba(0, 0, 0, ${opacities[id]})`;
    });
  });
}

// Add event listener to update the number of boxes on page load
window.addEventListener('DOMContentLoaded', () => {
  updateBoxCount();
});
