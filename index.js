// window.addEventListener("load", () => {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   console.log(canvas.width);
//   console.log(canvas.height);

//   let painting = false;

//   function startPosition(e) {
//     painting = true;
//     draw(e);
//   }// window.addEventListener("load", () => {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   console.log(canvas.width);
//   console.log(canvas.height);

//   let painting = false;

//   function startPosition(e) {
//     painting = true;
//     draw(e);
//   }

//   function finishedPosition() {
//     painting = false;
//     ctx.beginPath();
//   }

//   function draw(e) {
//     if (!painting) {
//       return;
//     }

//     ctx.lineWidth = 10;

//     ctx.lineCap = "round";
//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.clientX, e.clientY);
//   }

//   canvas.addEventListener("mousedown", startPosition);
//   canvas.addEventListener("mouseup", finishedPosition);
//   canvas.addEventListener("mousemove", draw);
// });

//   function finishedPosition() {
//     painting = false;
//     ctx.beginPath();
//   }

//   function draw(e) {
//     if (!painting) {
//       return;
//     }

//     ctx.lineWidth = 10;

//     ctx.lineCap = "round";
//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.clientX, e.clientY);
//   }

//   canvas.addEventListener("mousedown", startPosition);
//   canvas.addEventListener("mouseup", finishedPosition);
//   canvas.addEventListener("mousemove", draw);
// });

//Change Font weight of color

const penWeightInput = document.querySelector(".pen-weight-input");

function increaseFontSize(event) {
  penWeightInput.value++;
}

function decreaseFontSize(event) {
  if (penWeightInput.value > 1) penWeightInput.value--;
}

// // eraser js
// jQuery(
//   '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
// ).insertAfter(".quantity input");
// jQuery(".quantity").each(function () {
//   var spinner = jQuery(this),
//     input = spinner.find('input[type="number"]'),
//     btnUp = spinner.find(".quantity-up"),
//     btnDown = spinner.find(".quantity-down"),
//     min = input.attr("min"),
//     max = input.attr("max");

//   btnUp.click(function () {
//     var oldValue = parseFloat(input.val());
//     if (oldValue >= max) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue + 1;
//     }
//     spinner.find("input").val(newVal);
//     spinner.find("input").trigger("change");
//   });

//   btnDown.click(function () {
//     var oldValue = parseFloat(input.val());
//     if (oldValue <= min) {
//       var newVal = oldValue;
//     } else {
//       var newVal = oldValue - 1;
//     }
//     spinner.find("input").val(newVal);
//     spinner.find("input").trigger("change");
//   });
// });

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

const arrayOfTools = [
  backgroundElem,
  patternElem,
  pencilElem,
  shapesElem,
  textElem,
];

select.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  console.log("hello");
});

background.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  backgroundElem.classList.remove("none");
});

pattern.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  patternElem.classList.remove("none");
});

pencil.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  pencilElem.classList.remove("none");
});

shapes.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  shapesElem.classList.remove("none");
});

text.addEventListener("click", () => {
  arrayOfTools.forEach((tool) => {
    if (!tool.classList.contains("none")) {
      tool.classList.add("none");
    }
  });
  textElem.classList.remove("none");
});
