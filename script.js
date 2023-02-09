let penColour = 'white';

function setPenColour(pen) {
  penColour = pen.style.backgroundColor;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}

function coresAleatorias() {
  const hex = (Math.random() * 0xFFFFFF << 0).toString(16);
  return `#${hex}`;
}
console.log(coresAleatorias());

function btnGeraCor() {
  const cores = document.querySelectorAll('.color');

  cores.forEach((e) => {
   if (e.style.backgroundColor != 'black') {
    const novaCor = coresAleatorias();
    e.style.backgroundColor = novaCor;
  }});
}
