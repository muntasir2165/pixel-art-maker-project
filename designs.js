// Select color input
const colorElement = document.getElementById("colorPicker");
let selectedColor = colorElement.value; // initialize to the default value of black (#000000)
colorElement.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});

// Select size input
const heightElement = document.getElementById("inputHeight");
const widthElement = document.getElementById("inputWidth");
const submitElement = document.querySelector("input[type=submit]");
let selectedHeight = heightElement.value; // initialize to the default value of 10
let selectedWidth = widthElement.value; // initialize to the default value of 10
submitElement.addEventListener("click", (event) => {
  event.preventDefault();
  removeExistingGrid();
  selectedHeight = heightElement.value;
  selectedWidth = widthElement.value;
  if (!selectedHeight || !selectedWidth) {
    alert("Please Specify a Number for Grid Height and Width");
  } else {
    // When size is submitted by the user, call makeGrid()
    makeGrid();
  }
});

const tdClickHandler = (event) => {
  if (event.target.nodeName === "TD") {
    event.target.style.backgroundColor = selectedColor;
  }
};

const removeExistingGrid = () => {
  const table = document.getElementById("pixelCanvas");
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }
};

const makeGrid = () => {
  const table = document.getElementById("pixelCanvas");
  for (let row = 0; row < selectedHeight; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < selectedWidth; col++) {
      const td = document.createElement("td");
      td.addEventListener("click", tdClickHandler);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};
