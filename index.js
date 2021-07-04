window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let painting = false;
  var colorCount = 0;
  var bgCount = 0;
  let size = 2;
  let mode = true;

  function startPainting(event) {
    painting = true;
    makeIt(event);
  }

  function endPainting() {
    painting = false;
    ctx.beginPath();
  }

  function increaseSize() {
    size += 1;
    document.getElementById("pen-size").innerText = size;
  }

  function decreaseSize() {
    if (size > 1) {
      size -= 1;
      document.getElementById("pen-size").innerText = size;
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeIt(event) {
    console.log("cxas");
    if (mode) {
      draw(event);
    } else {
      erase(event);
    }
  }

  function draw(event) {
    if (!painting) {
      return;
    }

    ctx.lineWidth = size;
    ctx.lineCap = "round";

    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  }

  function erase(event) {
    if (!painting) {
      return;
    }

    ctx.lineWidth = size;
    ctx.lineCap = "round";

    ctx.clearRect(event.clientX - 2, event.clientY - 2, 30, 30);
  }

  function cleanScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function changeBgColor() {
    var colors = ["#98ddca", "#126e82", "#ffc93c", "#fea82f", "white"];
    const col = colors[bgCount % 5];
    bgCount += 1;
    document.getElementById("bg-color").style.backgroundColor = col;
    canvas.style.backgroundColor = col;
  }

  function changePenColor() {
    var colors = ["black", "red", "blue", "#fea82f"];
    const col = colors[colorCount % 4];
    colorCount += 1;
    document.getElementById("pen-color").style.color = col;
    ctx.strokeStyle = col;
  }

  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", endPainting);
  canvas.addEventListener("mousemove", makeIt);
  canvas.addEventListener("resize", resizeCanvas);
  document.getElementById("pen-color").addEventListener("click", () => {
    mode = true;
  });
  document.getElementById("eraser").addEventListener("click", () => {
    mode = false;
  });
  document.getElementById("clean").addEventListener("click", cleanScreen);
  document.getElementById("bg-color").addEventListener("click", changeBgColor);
  document
    .getElementById("pen-color")
    .addEventListener("click", changePenColor);
  document.getElementById("pen-up").addEventListener("click", increaseSize);
  document.getElementById("pen-down").addEventListener("click", decreaseSize);
});
