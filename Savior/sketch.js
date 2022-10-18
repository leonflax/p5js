// León Flax - "Savior"

// Image: © Alexandra Savior
// Artwork: © León Flax

let figura,
  tipoBlend,
  strobeFX = false;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  forPoints(0.03, random(1, 4));

  strobeCheck();

  setImgs();

  push();
  blendMode(OVERLAY);

  forPoints(0.06, 1.5);

  pop();
}

rightClick();
