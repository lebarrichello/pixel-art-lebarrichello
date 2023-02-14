let penColour = 'black';

function setPenColour(pen) {
  const divSelected = document.querySelector('.selected');
  penColour = pen.style.backgroundColor;
  if (divSelected != pen) {
    divSelected.classList.remove('selected');
    pen.classList.add('selected');
  }
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}

function coresAleatorias() {
  const hex = (Math.random() * 0xFFFFFF << 0).toString(16);
  return `#${hex}`;
}

function iniciaCor() {
  const cores = document.querySelectorAll('.color');
  colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
  const novas_cores = [];

  if (colorPalette === null) {
    cores.forEach((e) => {
      if (e.style.backgroundColor === '#FFFFFF') {
        const novaCor = coresAleatorias();
        e.style.backgroundColor = novaCor;
      }
      if ((e.style.backgroundColor === e.style.backgroundColor) && (e.style.backgroundColor != 'black')) {
        const novaCor = coresAleatorias();
        e.style.backgroundColor = novaCor;
        novas_cores.push(novaCor);
      }
    });
    localStorage.setItem('colorPalette', JSON.stringify(novas_cores));
  } else {
    lista_sem_black = Array.from(cores).filter((e) => e.style.backgroundColor != 'black');
    lista_sem_black.forEach((e, i) => {
      e.style.backgroundColor = colorPalette[i];
    });
  }
}

function btnGeraCor() {
  const cores = document.querySelectorAll('.color');
  const novas_cores = [];
  cores.forEach((e) => {
    if (e.style.backgroundColor === '#FFFFFF') {
      const novaCor = coresAleatorias();
      e.style.backgroundColor = novaCor;
      novas_cores.push(novaCor);
    }
    if ((e.style.backgroundColor === e.style.backgroundColor) && (e.style.backgroundColor != 'black')) {
      const novaCor = coresAleatorias();
      e.style.backgroundColor = novaCor;
      novas_cores.push(novaCor);
    }
  });
  localStorage.setItem('colorPalette', JSON.stringify(novas_cores));
  console.log(localStorage.getItem('colorPalette'));
}

function btnLimpaCor() {
  const limpaPixel = document.querySelectorAll('.pixel');
  limpaPixel.forEach((e) => {
    e.style.backgroundColor = 'white';
  });
  localStorage.removeItem('pixelBoard');
}

const pixels = document.querySelectorAll('.pixel');
document.addEventListener('click', (evento) => {
  const corPixel = [];
  for (let i = 0; i < pixels.length; i += 1) {
    if (evento.target.classList.contains('pixel')) {
      corPixel.push(pixels[i].style.backgroundColor);
    } else {
      return corPixel;
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(corPixel));
});

const salvarDesenho = () => {
  const desenho = JSON.parse(localStorage.getItem('pixelBoard'));
  if (desenho === null) {
    return;
  }
  const pixelQuadro = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixelQuadro[i].style.backgroundColor = desenho[i];
  }
};

// eslint-disable-next-line no-unused-vars
function generateBoard() {
  const tamanhoQuadro = document.querySelector('#board-size').value;
  if (tamanhoQuadro === '') {
    alert('Board inválido!');
  }
};

function limitaQuadro() {
  let tamQuadro = document.querySelector('#board-size').value;
  if (tamQuadro  < 5) {
    tamQuadro  = 5;
  } else if (tamQuadro  > 50) {
    tamQuadro  = 50;
  }
};

window.onload = () => {
  salvarDesenho();
  iniciaCor();
};
