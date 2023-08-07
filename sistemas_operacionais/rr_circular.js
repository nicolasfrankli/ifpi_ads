var Tarefa = /** @class */ (function () {
    function Tarefa(id, ingresso, duracao, prioridade) {
        this.id = id;
        this.ingresso = ingresso;
        this.duracao = duracao;
        this.prioridade = prioridade;
        this.tempoRestante = duracao;
        this.tv = 0;
        this.te = 0;
    }
    return Tarefa;
}());
var Escalonador = /** @class */ (function () {
    function Escalonador(quantum) {
        this.quantum = quantum;
        this.fila = [];
        this.tempo = 0;
    }
    Escalonador.prototype.adicionaTarefa = function (tarefa) {
        this.fila.push(tarefa);
    };
    Escalonador.prototype.escalona = function () {
        while (this.fila.length > 0) {
            var tarefaAtual = this.fila.shift(); // Pega a próxima tarefa da fila
            console.log("Tempo ".concat(this.tempo, ": Tarefa t").concat(tarefaAtual.id, " em execu\u00E7\u00E3o."));
            if (tarefaAtual.tempoRestante <= this.quantum) {
                // Tarefa será concluída
                tarefaAtual.tv = this.tempo - tarefaAtual.ingresso + tarefaAtual.tempoRestante;
                tarefaAtual.te = tarefaAtual.tv - tarefaAtual.duracao;
                this.tempo += tarefaAtual.tempoRestante;
                tarefaAtual.tempoRestante = 0;
            }
            else {
                // Tarefa precisa ser interrompida temporariamente
                tarefaAtual.tv = this.tempo - tarefaAtual.ingresso + this.quantum;
                tarefaAtual.te = tarefaAtual.tv - tarefaAtual.duracao;
                this.tempo += this.quantum;
                tarefaAtual.tempoRestante -= this.quantum;
                // Adiciona a tarefa de volta à fila
                this.fila.push(tarefaAtual);
            }
        }
    };
    return Escalonador;
}());
var t1 = new Tarefa(1, 4, 40, 4);
var t2 = new Tarefa(2, 1, 20, 2);
var t3 = new Tarefa(3, 3, 50, 1);
var t4 = new Tarefa(4, 0, 30, 3);
var escalonador = new Escalonador(15);
escalonador.adicionaTarefa(t1);
escalonador.adicionaTarefa(t2);
escalonador.adicionaTarefa(t3);
escalonador.adicionaTarefa(t4);
escalonador.escalona();
console.log("\nTempo de vida t1: ".concat(t1.tv, ", tempo de espera: ").concat(t1.te));
console.log("Tempo de vida t2: ".concat(t2.tv, ", tempo de espera: ").concat(t2.te));
console.log("Tempo de vida t3: ".concat(t3.tv, ", tempo de espera: ").concat(t3.te));
console.log("Tempo de vida t4: ".concat(t4.tv, ", tempo de espera: ").concat(t4.te));
console.log("\ntempo m\u00E9dio de vida: ".concat((t1.tv + t2.tv + t3.tv + t4.tv) / 4));
console.log("tempo m\u00E9dio de espera: ".concat((t1.te + t2.te + t3.te + t4.te) / 4));
