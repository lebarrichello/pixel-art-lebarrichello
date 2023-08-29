let penColour = 'black';

function setPenColour(pen) {
  const divSelected = document.querySelector('.selected');
  penColour = pen.style.backgroundColor;
  if (divSelected !== pen) {
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
  let colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
  const novas_cores = [];

  if (colorPalette === null) {
    cores.forEach((e) => {
      if (e.style.backgroundColor === 'rgb(255, 255, 255)' || e.style.backgroundColor === '') {
        const novaCor = coresAleatorias();
        e.style.backgroundColor = novaCor;
        novas_cores.push(novaCor);
      } else {
        novas_cores.push(e.style.backgroundColor);
      }
    });
    localStorage.setItem('colorPalette', JSON.stringify(novas_cores));
  } else {
    cores.forEach((e, i) => {
      e.style.backgroundColor = colorPalette[i];
    });
  }
}

function btnGeraCor() {
  const cores = document.querySelectorAll('.color');
  const novas_cores = [];
  cores.forEach((e) => {
    if (e.style.backgroundColor === 'rgb(255, 255, 255)' || e.style.backgroundColor === '') {
      const novaCor = coresAleatorias();
      e.style.backgroundColor = novaCor;
      novas_cores.push(novaCor);
    } else {
      novas_cores.push(e.style.backgroundColor);
    }
  });
  localStorage.setItem('colorPalette', JSON.stringify(novas_cores));
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
  pixels.forEach((pixel) => {
    if (evento.target === pixel) {
      corPixel.push(pixel.style.backgroundColor);
    }
  });
  localStorage.setItem('pixelBoard', JSON.stringify(corPixel));
});

const salvarDesenho = () => {
  const desenho = JSON.parse(localStorage.getItem('pixelBoard'));
  if (desenho === null) {
    return;
  }
  pixels.forEach((pixel, i) => {
    pixel.style.backgroundColor = desenho[i];
  });
};

function generateBoard() {
  const tamanhoQuadro = parseInt(document.querySelector('#board-size').value);

  if (isNaN(tamanhoQuadro) || tamanhoQuadro < 1 || tamanhoQuadro > 50) {
    alert('Por favor, insira um tamanho de quadro válido entre 1 e 50.');
    return;
  }

  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';

  for (let i = 0; i < tamanhoQuadro; i++) {
    const linha = document.createElement('div');
    linha.classList.add('linha');

    for (let j = 0; j < tamanhoQuadro; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', function() {
        setPixelColour(this);
      });
      linha.appendChild(pixel);
    }

    pixelBoard.appendChild(linha);
  }
}

function limitaQuadro() {
  let tamanhoQuadro = parseInt(document.querySelector('#board-size').value);
  if (tamanhoQuadro < 5) {
    tamanhoQuadro = 5;
  } else if (tamanhoQuadro > 50) {
    tamanhoQuadro = 50;
  }
  document.querySelector('#board-size').value = tamanhoQuadro; // Atualiza o valor do input
}

window.onload = () => {
  salvarDesenho();
  iniciaCor();
};


