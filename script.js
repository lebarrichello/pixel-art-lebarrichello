let penColour = 'white';

// eslint-disable-next-line no-unused-vars
function setPenColour(pen) {
  penColour = pen;
}

// eslint-disable-next-line no-unused-vars
function setPixelColour(pixel) {
  // eslint-disable-next-line no-param-reassign
  pixel.style.backgroundColor = penColour;
}
