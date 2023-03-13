import * as net from "net";

interface Jogador {
  nome: string;
  pontos: number;
  socket: net.Socket;
}

const jogadores: Jogador[] = [];
let contadorRodadas = 0;
const maxRodadas = 5;
const TAMANHO_MAPA = 10;

function gerarMapa(i: number, j: number) {
  const mapa: string[][] = [];

  for (let i = 0; i < TAMANHO_MAPA; i++) {
    mapa[i] = [];
    for (let j = 0; j < TAMANHO_MAPA; j++) {
      mapa[i][j] = "x";
    }
  }

  mapa[i][j] = "$";
  console.log(`Tesouro: [${i}][${j}]`)

  console.log("Mapa atual:");
  for (let i = 0; i < TAMANHO_MAPA; i++) {
    console.log(mapa[i].join(" "));
  }

  return mapa;
}

let mapa: string[][] | null = null;

const server = net.createServer((socket: net.Socket) => {
  console.log("Novo jogador conectado!");

  let jogadorAtual: Jogador;

  socket.on("data", (data: Buffer) => {
    const jogada = data.toString().trim();

    if (!jogadorAtual) {
      jogadorAtual = { nome: jogada, pontos: 0, socket };
      jogadores.push(jogadorAtual);
      console.log(`O jogador ${jogadorAtual.nome} se registrou.`);

      jogadorAtual.socket.write("Bem-vindo ao jogo de caça ao tesouro!\n");
      jogadorAtual.socket.write(`Você está registrado como ${jogadorAtual.nome}\n`);

      if (jogadores.length >= 2) {
        iniciaPartida();
      } else {
        jogadorAtual.socket.write("Ainda não há jogadores suficientes. Aguarde...\n");
      }
    } else {
      console.log(`O jogador ${jogadorAtual.nome} jogou: ${jogada}`);
      processaJogada(jogada);
    }
  });

  socket.on("end", () => {
    if (jogadorAtual) {
      console.log(`O jogador ${jogadorAtual.nome} desconectou.`);
      removeJogador(jogadorAtual);
      if (jogadores.length < 2) {
        encerraPartida();
      }
    }
  });

function iniciaPartida() {
  console.log("Iniciando nova partida...");
  contadorRodadas = 0;
  enviaMensagem("A partida começou! Boa sorte a todos os jogadores!");
  proximaRodada();
}

function encerraPartida() {
  console.log("Encerrando partida...");
  let vencedor: Jogador | null = null;
  for (let jogador of jogadores) {
    if (!vencedor || jogador.pontos > vencedor.pontos) {
      vencedor = jogador;
    }
  }
  if (vencedor) {
    enviaMensagem(`Parabéns, ${vencedor.nome}! Você venceu a partida com ${vencedor.pontos} pontos.`);
  } else {
    enviaMensagem("A partida terminou em empate.");
  }
  jogadores.forEach((jogador) => {
    jogador.socket.end();
  });
  jogadores.length = 0;
}

function proximaRodada() {
  contadorRodadas++;
  if (contadorRodadas > maxRodadas) {
    encerraPartida();
  } else {
    const i = Math.floor(Math.random() * TAMANHO_MAPA);
    const j = Math.floor(Math.random() * TAMANHO_MAPA);
    mapa = gerarMapa(i, j);
    enviaMapa();
    enviaMensagem(`Começando a rodada ${contadorRodadas}...`);
    enviaPlacar();
  }
}

function enviaMapa() {
  jogadores.forEach((jogador) => {
    jogador.socket.write("Mapa:\n");
    for (let linha of mapa!) {
      jogador.socket.write(linha.join("") + "\n");
    }
  });
}

function processaJogada(jogada: string) {
  const jogadaCoords = jogada.split(" "); 
  const x = Number(jogadaCoords[0]);
  const y = Number(jogadaCoords[1]);
  

  if (x >= 0 && x < mapa!.length && y >= 0 && y < mapa![0].length) {
    const posicao = mapa![x][y];
      if (posicao === "$") {
        jogadorAtual.pontos++;
        enviaMensagem(`${jogadorAtual.nome} acertou o tesouro e ganhou um ponto!`);
        enviaPlacar()
        proximaRodada()
      } else {
        enviaMensagem(`${jogadorAtual.nome} errou... Próximo jogador`);
      }
  }
  else {
    enviaMensagem(`${jogadorAtual.nome}, jogada inválida. Tente novamente.`);
  }
}

function enviaMensagem(mensagem: string) {
jogadores.forEach((jogador) => {
jogador.socket.write(`${mensagem}\n`);
});
}
    
function enviaPlacar() {
jogadores.forEach((jogador) => {
jogador.socket.write(`Pontuação: ${jogador.pontos}\n`);
});
}
    
function removeJogador(jogador: Jogador) {
const index = jogadores.indexOf(jogador);
if (index !== -1) {
jogadores.splice(index, 1);
}
}
});
    
const PORT = 3000;
const HOST = "127.0.0.1";
    
server.listen(PORT, HOST, () => {
console.log(`Servidor rodando em ${HOST}:${PORT}`);
});