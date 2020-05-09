const canvasLib = require("canvas");
const fs = require("fs");
const path = require("path");

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

function letterA(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 8, y + h);

  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w - w / 8, y + h);

  ctx.moveTo(x + w / 4, y + h / 2);
  ctx.lineTo(x + (w / 4) * 3, y + h / 2);
  ctx.stroke();
}

function letterB(ctx, x, y, w, h) {
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

function letterC(ctx, x, y, w, h) {
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

function letterD(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function letterE(ctx, x, y, w, h) {
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

function letterF(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
}

function letterG(ctx, x, y, w, h) {
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

function letterH(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
}

function letterI(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 2, y + h / 8);
  ctx.moveTo(x + w / 2, y + h / 2);
  ctx.lineTo(x + w / 2, y + h);
  ctx.stroke();
}

function letterJ(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.lineTo(x + w / 1.5, y + h / 2);
  ctx.stroke();
}

function letterK(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 8);
  ctx.stroke();
}

function letterL(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterM(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}

function letterN(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterO(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function letterP(ctx, x, y, w, h) {
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

function letterQ(ctx, x, y, w, h) {
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

function letterR(ctx, x, y, w, h) {
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

function letterS(ctx, x, y, w, h) {
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

function letterT(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.stroke();
}

function letterU(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterV(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w / 2, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterW(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 4, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.lineTo(x + (w / 4) * 3, y + h);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

function letterX(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterY(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 4, y + h / 2);
  ctx.moveTo(x, y + h);
  ctx.lineTo(x + w / 2, y);
  ctx.stroke();
}

function letterZ(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.stroke();
}
function space(ctx, x, y, w, h) {}

function typeWriter(ctx, alphabet, config, text) {
  const words = text.split(" ");
  ctx.strokeStyle = config.textColor;
  words.reduce(
    (acc, x) => {
      const letters = x.split("");
      const wordWidth = letters.length * config.w + 10 * letters.length - 1;
      if (wordWidth + acc.x > config.pageW) {
        acc.x = config.x;
        acc.y += config.h * 2;
      }
      letters.push(" ");
      const result = letters.reduce(
        (acc2, y, idx) => {
          const letter = y.toUpperCase();
          if (idx > 0) {
            acc2.x += 10;
          }
          if (alphabet[letter]) {
            alphabet[letter](ctx, acc.x + acc2.x, acc.y, config.w, config.h);
          }
          acc2.x += config.w;
          return acc2;
        },
        {
          x: 0,
          y: acc.y,
        }
      );
      acc.x += result.x;
      return acc;
    },
    { x: config.x, y: config.y }
  );
}

function textImage(filePath, styles, text) {
  const canvas = canvasLib.createCanvas(styles.imageWidth, styles.imageHeight);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = styles.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  typeWriter(
    ctx,
    letters,
    {
      textColor: styles.textColor,
      x: styles.startX,
      y: styles.startY,
      w: styles.letterWidth,
      h: styles.letterHeight,
      pageH: canvas.height,
      pageW: canvas.width,
    },
    text
    // "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
  );
  // drawSpirograph(canvas.width / 2, canvas.height / 2, 200, 60, 60, 40, 40);
  const out = fs.createWriteStream(filePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
}

module.exports = { textImage };
