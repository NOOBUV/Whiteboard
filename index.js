const penWeightInput = document.querySelector(".pen-weight-input");

function increaseFontSize(event) {
  penWeightInput.value++;
  PENCIL_WIDTH = penWeightInput.value;
  context.lineWidth = PENCIL_WIDTH;
}

function decreaseFontSize(event) {
  if (penWeightInput.value > 1) penWeightInput.value--;
  PENCIL_WIDTH = penWeightInput.value;
  context.lineWidth = PENCIL_WIDTH;
}

const eraserSize = document.querySelector(".eraser");

function increaseEraseSize(event) {
  if (eraserSize.value < 50) eraserSize.value++;
  ERASER_SIZE = eraserSize.value;
}

function decreaseEraseSize(event) {
  if (eraserSize.value > 1) eraserSize.value--;
  ERASER_SIZE = eraserSize.value;
}

const states = [
  "SELECT",
  "BACKGROUND",
  "PATTERN",
  "PENCIL",
  "ERASE",
  "SHAPE",
  "TEXT",
  "IMAGE_UPLOAD",
];

const state = "SELECT";

const select = document.getElementById("select");
const background = document.getElementById("background");
const pattern = document.getElementById("pattern");
const pencil = document.getElementById("pencil");
const eraser = document.getElementById("eraser");
const shapes = document.getElementById("shapes");
const text = document.getElementById("text");
const imageUpload = document.getElementById("image-upload");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
const clear = document.getElementById("clear");

const backgroundElem = document.getElementsByClassName("bg-color-dropdown")[0];
const patternElem = document.getElementsByClassName("bg-img-dropdown")[0];
const pencilElem = document.getElementsByClassName("pencil-sub-tools")[0];
const shapesElem = document.getElementsByClassName("shape-display")[0];
const textElem = document.getElementsByClassName("text-options")[0];
const eraserElem = document.getElementsByClassName("eraser-ctr")[0];

const arrayOfTools = [
  backgroundElem,
  patternElem,
  pencilElem,
  shapesElem,
  textElem,
  eraserElem,
];

select.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  console.log("hello");
});

function handleBackgroundColorEvents() {
  const bgBtns = document.getElementsByClassName("bg-btn");
  Array.from(bgBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      BG_COLOR = e.target.classList[2];
      canvas.style.backgroundColor = BG_COLOR;
    });
  });
  const input = document.getElementById("bg-btn-input");
  input.addEventListener("input", () => {
    BG_COLOR = input.value;
    canvas.style.backgroundColor = BG_COLOR;
  });
}

background.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  backgroundElem.classList.remove("none");
  handleBackgroundColorEvents();
});

pattern.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  patternElem.classList.remove("none");
});

function handlePencileEvents(e) {
  const inputColorBtns = document.getElementsByClassName("pen-clr");
  Array.from(inputColorBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      PENCIL_COLOR = e.target.classList[1];
      context.strokeStyle = PENCIL_COLOR;
      console.log(context.strokeStyle);
    });
  });

  const pencilColor = document.getElementById("input-pen-color");
  pencilColor.addEventListener("input", () => {
    PENCIL_COLOR = pencilColor.value;
    context.strokeStyle = PENCIL_COLOR;
    console.log(context.strokeStyle);
  });

  const pencilWidth = document.getElementById("input-pen-width");
  pencilWidth.addEventListener("input", () => {
    PENCIL_WIDTH = pencilWidth.value;
    context.lineWidth = PENCIL_WIDTH;
    console.log(context.lineWidth);
  });
}

pencil.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  pencilElem.classList.remove("none");
  handlePencileEvents();
});

function handleShapeEvents() {
  const rectangle = document.getElementById("shapeRect");
  rectangle.addEventListener("click", (e) => {
    context.strokeRect(canvas.width / 2 - 100, canvas.height / 2, 400, 200);
  });
  const square = document.getElementById("shapeSquare");
  square.addEventListener("click", (e) => {
    context.strokeRect(canvas.width / 2, canvas.height / 2, 200, 200);
  });
  const circle = document.getElementById("shapeCircle");
  circle.addEventListener("click", (e) => {
    context.beginPath();
    context.arc(
      canvas.width / 2 - 50,
      canvas.height / 2,
      50,
      0,
      Math.PI * 2,
      false
    );
    context.stroke();
    context.beginPath();
  });
  const triangle = document.getElementById("shapeTriangle");
  triangle.addEventListener("click", (e) => {
    context.beginPath();
    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(canvas.width / 2 - 100, canvas.height / 2 - 200);
    context.lineTo(canvas.width / 2 - 100, canvas.height / 2 - 250);
    context.closePath();
    context.stroke();
    context.beginPath();
  });

  const line = document.getElementById("shapeLine");
  line.addEventListener("click", (e) => {
    console.log(e.target);
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
    context.lineTo(canvas.width / 2, canvas.height / 2);
    context.stroke();
    context.closePath();
    context.beginPath();
  });

  const ellipse = document.getElementById("shapeEllipse");
  ellipse.addEventListener("click", (e) => {
    context.beginPath();
    context.ellipse(
      canvas.width / 2,
      canvas.height / 2,
      50,
      75,
      Math.PI / 2,
      0,
      2 * Math.PI
    );
    context.stroke();
  });
}

shapes.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  shapesElem.classList.remove("none");
  handleShapeEvents();
});

text.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  textElem.classList.remove("none");
});

function handleEraserEvents() {
  const input = document.querySelector(".eraser");
  var n = input.value;
  n = Number(n);
  if (n < 0) {
    input.value = 0;
  } else if (n > 50) {
    input.value = 50;
  }
  context.lineWidth = input.value;
}

eraser.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  eraserElem.classList.remove("none");
  handleEraserEvents();
});

// Canvas

let BG_COLOR = "#ffffff";
let PENCIL_COLOR = "#000000";
let PENCIL_WIDTH = penWeightInput.value;
let PAINTING = false;
let ERASER_SIZE = eraserSize.value;
let mode = true;

const previousState = [];
const futureState = [];

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.style.backgroundColor = BG_COLOR;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function handleMouseDown(e) {
  PAINTING = true;
  handleMouseMove(e);
}

function handleMouseUp() {
  PAINTING = false;
  previousState.push(context.getImageData(0, 0, canvas.width, canvas.height));

  // if (previousState.length > 2) context.putImageData(previousState[0], 0, 0);
  context.beginPath();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function handleMouseMove(e) {
  if (!PAINTING) {
    return;
  }

  if (mode) draw(e);
  else erase(e);
}

function draw(e) {
  context.lineWidth = PENCIL_WIDTH;
  context.lineCap = "round";

  context.lineTo(e.clientX, e.clientY);
  context.stroke();
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
}

function erase(e) {
  context.clearRect(e.clientX, e.clientY, ERASER_SIZE + 0.1, ERASER_SIZE + 0.1);
}

/***clear screen**/
function cleanScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
clear.addEventListener("click", () => {
  cleanScreen();
});

// Undo and Redo

function undoCanvas() {
  if (previousState.length < 1) return;

  if (previousState.length == 1) {
    previousState.pop();
    context.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }
  let tempState = previousState.pop();
  futureState.push(tempState);
  context.putImageData(previousState[previousState.length - 1], 0, 0);
}

function redoCanvas() {
  if (previousState.length < 0) return;

  // if (previousState.length == 1) {
  //   previousState.pop();
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   return;
  // }
  let tempState = futureState.pop();
  previousState.push(tempState);
  context.putImageData(tempState, 0, 0);
}

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", resizeCanvas);
document.querySelector(".pencil-tool").addEventListener("click", () => {
  mode = true;
});
document.querySelector(".eraser-tool").addEventListener("click", () => {
  mode = false;
});

document.getElementById("undo").addEventListener("click", () => {
  undoCanvas();
});

document.getElementById("redo").addEventListener("click", () => {
  redoCanvas();
});
