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
