import * as net from "net";
import * as readline from "readline";

const client = new net.Socket();
const rl = readline.createInterface(process.stdin, process.stdout);

let jogadorAtual: { nome: string, pontos: number } | null = null;

client.connect({ port: 3000 }, () => {
  console.log("Conectado ao servidor!");
});

client.on("data", (data: Buffer) => {
  const mensagem = data.toString().trim();
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

rl.on("line", (input: string) => {
  if (!jogadorAtual) {
    client.write(input.trim());
  } else {
    client.write(input.trim());
  }
});