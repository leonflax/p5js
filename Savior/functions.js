function preload() {
  figureImg = loadImage("assets/alexandra.png");
  textureImg = loadImage("assets/textureImg.jpg");
}

function forPoints(forRefresh, pSize) {
  let pixColor = color(figureImg.get(mouseX, mouseY));
  stroke(pixColor);

  strokeWeight(pSize);

  for (let i = 0; i <= 50; i += forRefresh) {
    let x = random(width);
    let y = random(height);
    point(x, y);
  }
}

function strobe() {
  if (mouseButton == LEFT && !strobeFX) {
    strobeFX = true;
  } else if (mouseButton == LEFT && strobeFX) {
    strobeFX = false;
  }
}

function strobeCheck() {
  if (strobeFX == true) {
    tipoBlend = DIFFERENCE;
  } else {
    tipoBlend = LIGHTEST;
  }
}

function setImgs() {
  push();
  blendMode(tipoBlend);
  image(textureImg, 0, 0);
  pop();

  image(figureImg, 0, 0);
}

function mouseClicked() {
  strobe();
}

function rightClick() {
  document.oncontextmenu = function () {
    return false;
  };
}
