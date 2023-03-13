"use strict";
exports.__esModule = true;
var net = require("net");
var jogadores = [];
var contadorRodadas = 0;
var maxRodadas = 5;
var TAMANHO_MAPA = 10;
function gerarMapa(i, j) {
    var mapa = [];
    for (var i_1 = 0; i_1 < TAMANHO_MAPA; i_1++) {
        mapa[i_1] = [];
        for (var j_1 = 0; j_1 < TAMANHO_MAPA; j_1++) {
            mapa[i_1][j_1] = "x";
        }
    }
    mapa[i][j] = "$";
    console.log("Tesouro: [".concat(i, "][").concat(j, "]"));
    console.log("Mapa atual:");
    for (var i_2 = 0; i_2 < TAMANHO_MAPA; i_2++) {
        console.log(mapa[i_2].join(" "));
    }
    return mapa;
}
var mapa = null;
var server = net.createServer(function (socket) {
    console.log("Novo jogador conectado!");
    var jogadorAtual;
    socket.on("data", function (data) {
        var jogada = data.toString().trim();
        if (!jogadorAtual) {
            jogadorAtual = { nome: jogada, pontos: 0, socket: socket };
            jogadores.push(jogadorAtual);
            console.log("O jogador ".concat(jogadorAtual.nome, " se registrou."));
            jogadorAtual.socket.write("Bem-vindo ao jogo de caça ao tesouro!\n");
            jogadorAtual.socket.write("Voc\u00EA est\u00E1 registrado como ".concat(jogadorAtual.nome, "\n"));
            if (jogadores.length >= 2) {
                iniciaPartida();
            }
            else {
                jogadorAtual.socket.write("Ainda não há jogadores suficientes. Aguarde...\n");
            }
        }
        else {
            console.log("O jogador ".concat(jogadorAtual.nome, " jogou: ").concat(jogada));
            processaJogada(jogada);
        }
    });
    socket.on("end", function () {
        if (jogadorAtual) {
            console.log("O jogador ".concat(jogadorAtual.nome, " desconectou."));
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
        var vencedor = null;
        for (var _i = 0, jogadores_1 = jogadores; _i < jogadores_1.length; _i++) {
            var jogador = jogadores_1[_i];
            if (!vencedor || jogador.pontos > vencedor.pontos) {
                vencedor = jogador;
            }
        }
        if (vencedor) {
            enviaMensagem("Parab\u00E9ns, ".concat(vencedor.nome, "! Voc\u00EA venceu a partida com ").concat(vencedor.pontos, " pontos."));
        }
        else {
            enviaMensagem("A partida terminou em empate.");
        }
        jogadores.forEach(function (jogador) {
            jogador.socket.end();
        });
        jogadores.length = 0;
    }
    function proximaRodada() {
        contadorRodadas++;
        if (contadorRodadas > maxRodadas) {
            encerraPartida();
        }
        else {
            var i = Math.floor(Math.random() * TAMANHO_MAPA);
            var j = Math.floor(Math.random() * TAMANHO_MAPA);
            mapa = gerarMapa(i, j);
            enviaMapa();
            enviaMensagem("Come\u00E7ando a rodada ".concat(contadorRodadas, "..."));
            enviaPlacar();
        }
    }
    function enviaMapa() {
        jogadores.forEach(function (jogador) {
            jogador.socket.write("Mapa:\n");
            for (var _i = 0, _a = mapa; _i < _a.length; _i++) {
                var linha = _a[_i];
                jogador.socket.write(linha.join("") + "\n");
            }
        });
    }
    function processaJogada(jogada) {
        var jogadaCoords = jogada.split(" ");
        var x = Number(jogadaCoords[0]);
        var y = Number(jogadaCoords[1]);
        if (x >= 0 && x < mapa.length && y >= 0 && y < mapa[0].length) {
            var posicao = mapa[x][y];
            if (posicao === "$") {
                jogadorAtual.pontos++;
                enviaMensagem("".concat(jogadorAtual.nome, " acertou o tesouro e ganhou um ponto!"));
                enviaPlacar();
                proximaRodada();
            }
            else {
                enviaMensagem("".concat(jogadorAtual.nome, " errou... Pr\u00F3ximo jogador"));
            }
        }
        else {
            enviaMensagem("".concat(jogadorAtual.nome, ", jogada inv\u00E1lida. Tente novamente."));
        }
    }
    function enviaMensagem(mensagem) {
        jogadores.forEach(function (jogador) {
            jogador.socket.write("".concat(mensagem, "\n"));
        });
    }
    function enviaPlacar() {
        jogadores.forEach(function (jogador) {
            jogador.socket.write("Pontua\u00E7\u00E3o: ".concat(jogador.pontos, "\n"));
        });
    }
    function removeJogador(jogador) {
        var index = jogadores.indexOf(jogador);
        if (index !== -1) {
            jogadores.splice(index, 1);
        }
    }
});
var PORT = 3000;
var HOST = "127.0.0.1";
server.listen(PORT, HOST, function () {
    console.log("Servidor rodando em ".concat(HOST, ":").concat(PORT));
});
