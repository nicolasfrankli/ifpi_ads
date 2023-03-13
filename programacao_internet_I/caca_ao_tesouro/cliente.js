"use strict";
exports.__esModule = true;
var net = require("net");
var readline = require("readline");
var client = new net.Socket();
var rl = readline.createInterface(process.stdin, process.stdout);
var jogadorAtual = null;
client.connect({ port: 3000 }, function () {
    console.log("Conectado ao servidor!");
});
client.on("data", function (data) {
    var mensagem = data.toString().trim();
    console.log(mensagem);
    if (mensagem.startsWith("Você está registrado como")) {
        jogadorAtual = {
            nome: mensagem.split(" ")[4],
            pontos: 0
        };
    }
    else if (mensagem === "Ainda não há jogadores suficientes. Aguarde...") {
        console.log("Aguardando mais jogadores...");
    }
    else if (mensagem.startsWith("A partida começou!")) {
        console.log("A partida começou!");
    }
});
rl.on("line", function (input) {
    if (!jogadorAtual) {
        client.write(input.trim());
    }
    else {
        client.write(input.trim());
    }
});