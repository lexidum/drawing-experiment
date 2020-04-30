const canvasLib = require("canvas");
const fs = require("fs");
const path = require("path");
const canvas = canvasLib.createCanvas(600, 600);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(120,80,150,1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = "#175385";
// ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);

function draw(x, y, radius, isFill) {
  const color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 10
  )}, ${Math.round(Math.random() * 255)}, 1)`;
  if (!isFill) {
    ctx.lineWidth = 6;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  } else {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
function drawAbstract() {
  ctx.fillStyle = "#1B3583";
  ctx.fillRect(canvas.width / 2 - 75, 0, 150, canvas.height);
  for (let i = 0; i <= 15; i += 1) {
    draw(
      i * Math.random() * 50,
      i * Math.random() * 50,
      i * 10,
      Math.random() > 0.5
    );
  }
}
function drawSpirograph(cx, cy, r1, r2, r3, ratio1, ratio2) {
  ctx.beginPath();
  ctx.moveTo(cx + r1 + r2 + r3, cy);
  for (let x, y, t = 0; t <= Math.PI * 2; t += 0.01) {
    x =
      cx +
      r1 * Math.cos(t) +
      r2 * Math.cos(t * ratio1) +
      r3 * Math.cos(t * ratio2);
    y =
      cy +
      r1 * Math.sin(t) +
      r2 * Math.sin(t * ratio1) +
      r3 * Math.sin(t * ratio2);
    ctx.lineTo(x, y);
  }
  // ctx.lineTo(cx + radius, cy);
  ctx.strokeStyle = "#5150A9";
  ctx.lineWidth = 6;
  ctx.stroke();
}
drawSpirograph(canvas.width / 2, canvas.height / 2, 200, 60, 60, 40, 40);
const out = fs.createWriteStream(path.join(__dirname, "result.png"));
const stream = canvas.createPNGStream();
stream.pipe(out);
