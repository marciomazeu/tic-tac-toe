const quadrado = document.querySelectorAll(".quadrado");
console.log(quadrado);
let displayJogador = document.getElementById("jogador");
displayJogador.innerHTML = "Jogador X";
const telaInicial = document.getElementById("tela__inicial");
const telaJogo = document.getElementById("tela__jogo");
const twoPlayersBt = document.getElementById("2players");
const jogadorVencedor = document.getElementById("vencedor");
const pararBt = document.getElementById("parar");
const continuarBt = document.getElementById("continuar");
const musicaJogo = document.querySelector("audio");
const audioJogo = new Audio("./audio/robot-game-134743.mp3");
const body = document.querySelector("body");
const btnParar = document.getElementById("btnParar");
const placarJogadorX = document.getElementById("jogadorX");
const placarJogadorO = document.getElementById("jogadorO");
body.addEventListener("load", () => {});

let jogadas = 0;
let jogadorX = 0;
let jogadorO = 0;

const displayVencedor = document.getElementById("container-vencedor");
displayVencedor.style.display = "none";
for (const celula of quadrado) {
  celula.addEventListener("click", handleClick, { once: true });
  //console.log(celula);
}

let player = false;
const x = "X";
const o = "O";
let conteudo = "";
let jogada1 = [];
let jogada2 = [];
let combinacao = 0;

function changePlayer() {
  player = !player;

  console.log(player);
  if (player) {
    return (conteudo = x);
  } else {
    return (conteudo = o);
  }
}

twoPlayersBt.addEventListener("click", function () {
  //telaJogo.classList.remove('hidden');
  telaJogo.style.display = "block";
  //telaInicial.classList.add('hidden');
  telaInicial.style.display = "none";
  displayVencedor.style.display = "none";
  //audioJogo.play();
  audioJogo.volume = 0.5;
  exibirPlacar();
});

pararBt.addEventListener("click", function () {
  //telaJogo.classList.add('hidden');
  telaJogo.style.display = "none";
  //telaInicial.classList.remove('hidden');
  telaInicial.style.display = "block";
  displayVencedor.style.display = "none";
  audioJogo.pause();
});
btnParar.addEventListener("click", function () {
  //telaJogo.classList.add('hidden');
  telaJogo.style.display = "none";
  //telaInicial.classList.remove('hidden');
  telaInicial.style.display = "block";
  displayVencedor.style.display = "none";
  audioJogo.pause();
  resetGame();
});

continuarBt.addEventListener("click", function () {
  resetGame();
  //telaJogo.classList.add('hidden');
  telaJogo.style.display = "block";
  //telaInicial.classList.remove('hidden');
  //telaInicial.style.display = "block";
  displayVencedor.style.display = "none";
  exibirPlacar();
});

function vencedor(jogada, player) {
  let vencedor = player == true ? '"X"' : '"O"';

  let linhaSuperior = ["1", "2", "3"];
  let linhaMeio = ["4", "5", "6"];
  let sequencia = [];
  // let teste = compareArrays(jogada,casasDoTabuleiro);
  //console.log(teste);
  //let acertos = casasDoTabuleiro.filter(jogada => casasDoTabuleiro.includes(jogada));

  console.log("Combinação: " + combinacao);

  console.log(player === true ? "Jogador X" : "Jogador O");
  console.log(" e a jogada foi: " + jogada);
  //compareArrays(jogada,casasDoTabuleiro)
  //console.log(compareArrays(jogada,casasDoTabuleiro));
  //acertos = casasDoTabuleiro.filter(jogada => casasDoTabuleiro.includes(jogada));
  //console.log('acertos: ');
  //console.log(acertos);
  verificaVencedor(player, conteudo);
}

let compareArrays = (a, b) => {
  console.log(JSON.stringify(a)); // JSON.stringify(a) === JSON.stringify(b);
  console.log(JSON.stringify(b));
};

function verificaVencedor(jogador, conteudo) {
  console.log(jogador);
  let vitorioso = jogador === true ? "Jogador X" : "Jogador O";
  console.log("teste " + quadrado[0].textContent);
  //verifica se a primeira linha esta igual
  if (
    quadrado[0].textContent == conteudo &&
    quadrado[1].textContent == conteudo &&
    quadrado[2].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }
  //verifica se a linha do meio esta igual
  else if (
    quadrado[3].textContent == conteudo &&
    quadrado[4].textContent == conteudo &&
    quadrado[5].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }
  //verifica se a linha inferior esta igual
  else if (
    quadrado[6].textContent == conteudo &&
    quadrado[7].textContent == conteudo &&
    quadrado[8].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }

  //verifica se a coluna da esquerda esta igual
  else if (
    quadrado[0].textContent == conteudo &&
    quadrado[3].textContent == conteudo &&
    quadrado[6].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }
  //verifica se a coluna do meio esta igual
  else if (
    quadrado[1].textContent == conteudo &&
    quadrado[4].textContent == conteudo &&
    quadrado[7].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }
  //verifica se a coluna da direita esta igual
  else if (
    quadrado[2].textContent == conteudo &&
    quadrado[5].textContent == conteudo &&
    quadrado[8].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }

  //verifica se a diagonal esta igual
  else if (
    quadrado[0].textContent == conteudo &&
    quadrado[4].textContent == conteudo &&
    quadrado[8].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  }
  //verifica se a diagonal esta igual
  else if (
    quadrado[2].textContent == conteudo &&
    quadrado[4].textContent == conteudo &&
    quadrado[6].textContent == conteudo
  ) {
    chamaVitorioso(vitorioso);
  } else {
    chamaEmpate();
  }
}

function resetGame() {
  //displayVencedor.style.display = "none";
  jogadas = 0;
  //location.reload();
  celulas = document.querySelectorAll(".quadrado");
  for (const celula of celulas) {
    celula.textContent = "";
    //console.log(celula);
  }

  for (const celula of quadrado) {
    celula.addEventListener("click", handleClick, { once: true });
    //console.log(celula);
  }
}
function chamaVitorioso(vitorioso) {
  if (vitorioso == "Jogador X") {
    jogadorX++;
  } else if (vitorioso == "Jogador O") {
    jogadorO++;
  }
  atualizaPlacar();
  setTimeout(() => {
    displayVencedor.style.display = "block";
    telaJogo.style.display = "none";
    //alert("O " + vitorioso + " Venceu");
    jogadorVencedor.innerHTML = `O <strong>${vitorioso}</strong> ganhou!!!`;

    resetGame();
  }, 250);
}

function chamaEmpate() {
  if (jogadas == 9) {
    setTimeout(() => {
      displayVencedor.style.display = "block";
      telaJogo.style.display = "none";
      //alert("O " + vitorioso + " Venceu");
      jogadorVencedor.innerHTML = `O Jogo terminou empatado (SEM GANHADOR)!!!`;

      resetGame();
    }, 150);
  }
}

function handleClick(e) {
  //console.log(this.id);
  //console.log(e);
  const id = this.id;
  let cell = document.getElementById(id);

  //console.log(cell);
  cell.textContent = changePlayer();
  if (cell.textContent == "X") {
    jogada1.push(id);
    jogadas++;
    vencedor(jogada1, player);
    console.log(
      "jogador 1: " +
        jogada1.sort(function (a, b) {
          return a - b;
        })
    );

    //inverter a logica da troca de jogador para mostrar quem é o proximo a jogar
    displayJogador.innerHTML = player == false ? "Jogador X" : "Jogador O";
  } else {
    jogada2.push(id);
    jogadas++;
    vencedor(jogada2, player);
    console.log(
      "jogador 2: " +
        jogada2.sort(function (a, b) {
          return a - b;
        })
    );

    //inverter a logica da troca de jogador para mostrar quem é o proximo a jogar
    displayJogador.innerHTML = player == false ? "Jogador X" : "Jogador O";
  }
}

function atualizaPlacar() {
  const placar_jogo = {
    jogadorX: jogadorX,
    jogadorO: jogadorO,
  };
  console.log("Entrou no atualizaPlacar");
  localStorage.setItem("placar", JSON.stringify(placar_jogo));
}

function exibirPlacar() {
  let placarParaExibir = JSON.parse(localStorage.getItem("placar"));
  jogadorX = placarParaExibir.jogadorX;
  jogadorO = placarParaExibir.jogadorO;

  placarJogadorX.innerText = " " + jogadorX;
  placarJogadorO.innerText = " " + jogadorO;
}
