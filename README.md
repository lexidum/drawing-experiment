# Text and drawing tool

An experiment working with node.js and canvas.

Try by installing:

```
npm install @lexidum/type-and-draw
```

Example usage:

```js
const textImage = require("./index").textImage;
const path = require("path");
textImage(
  path.join(__dirname, "result.png"),
  {
    startX: 20,
    startY: 40,
    letterWidth: 30,
    letterHeight: 30,
    imageWidth: 600,
    imageHeight: 600,
    bg: "black",
    textColor: "white",
  },
  "this is a sample text"
);
```
