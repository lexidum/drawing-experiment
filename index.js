const canvasLib = require("canvas");
const fs = require("fs");
const path = require("path");
const canvas = canvasLib.createCanvas(600, 600);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#A6BC98";
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
const letters = {
  A: letterA,
  B: letterB,
  C: letterC,
  D: letterD,
  E: letterE,
  F: letterF,
  G: letterG,
  H: letterH,
  I: letterI,
  J: letterJ,
  K: letterK,
  L: letterL,
  M: letterM,
  N: letterN,
  O: letterO,
  P: letterP,
  Q: letterQ,
  R: letterR,
  S: letterS,
  T: letterT,
  U: letterU,
  V: letterV,
  W: letterW,
  X: letterX,
  Y: letterY,
  Z: letterZ,
  " ": space,
};

function letterA(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 8, y + h);

  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w - w / 8, y + h);

  ctx.moveTo(x + w / 4, y + h / 2);
  ctx.lineTo(x + (w / 4) * 3, y + h / 2);
  ctx.stroke();
}

function letterB(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + w / 12, y + h / 2);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 1.5, y);
  ctx.lineTo(x + w / 1.5, y + h / 2);
  ctx.stroke();
}

function letterC(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w / 1.5, y + h);
  ctx.lineTo(x + w / 1.5, y + h / 1.5);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 1.5, y);
  ctx.lineTo(x + w / 1.5, y + h / 4);
  ctx.stroke();
}

function letterD(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function letterE(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);

  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);

  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterF(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
}

function letterG(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w / 1.5, y + h);
  ctx.lineTo(x + w / 1.5, y + h / 1.5);
  ctx.lineTo(x + w / 4, y + h / 1.5);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 1.5, y);
  ctx.lineTo(x + w / 1.5, y + h / 4);
  ctx.stroke();
}

function letterH(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
}

function letterI(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 2, y + h / 8);
  ctx.moveTo(x + w / 2, y + h / 2);
  ctx.lineTo(x + w / 2, y + h);
  ctx.stroke();
}

function letterJ(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.lineTo(x + w / 1.5, y + h / 2);
  ctx.stroke();
}

function letterK(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 8);
  ctx.stroke();
}

function letterL(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterM(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterN(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterO(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function letterP(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h / 1.5);
  ctx.moveTo(x, y + h / 1.5);
  ctx.lineTo(x + w, y + h / 1.5);
  ctx.stroke();
}

function letterQ(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h / 1.2);
  ctx.lineTo(x + w / 1.2, y + h / 1.2);
  ctx.lineTo(x + w / 1.2, y);
  ctx.lineTo(x, y);
  ctx.moveTo(x + w / 1.2, y + h / 1.2);
  ctx.lineTo(x + w / 1.8, y + h / 1.8);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterR(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.moveTo(x + w, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
}

function letterS(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.stroke();
}

function letterT(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.stroke();
}

function letterU(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterV(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterW(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 4, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.lineTo(x + (w / 4) * 3, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterX(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterY(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 4, y + h / 2);
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterZ(x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}
function space(x, y, w, h) {}

function typeWriter(alphabet, config, text) {
  const letters = text.split("");
  letters.reduce(
    (acc, x) => {
      const letter = x.toUpperCase();
      if (alphabet[letter]) {
        alphabet[letter](acc.x, acc.y, config.w, config.h);
      }
      acc.x += config.w + 10;
      if (acc.x + config.w > config.pageW) {
        acc.x = config.x;
        acc.y += config.h * 2;
      }
      return acc;
    },
    { x: config.x, y: config.y }
  );
}

typeWriter(
  letters,
  {
    color: "darkGray",
    x: 20,
    y: 40,
    w: 30,
    h: 30,
    pageH: canvas.height,
    pageW: canvas.width,
  },
  "Pressed Flowers Glass Water Bottle With Infuser"
  // "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
);

// drawSpirograph(canvas.width / 2, canvas.height / 2, 200, 60, 60, 40, 40);
const out = fs.createWriteStream(path.join(__dirname, "result.png"));
const stream = canvas.createPNGStream();
stream.pipe(out);
