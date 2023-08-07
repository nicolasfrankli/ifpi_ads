class Tarefa {
    id: number;
    ingresso: number;
    duracao: number;
    prioridade: number;
    tempoRestante: number;
    tv: number;
    te: number;
  
    constructor(id: number, ingresso: number, duracao: number, prioridade: number) {
      this.id = id;
      this.ingresso = ingresso;
      this.duracao = duracao;
      this.prioridade = prioridade;
      this.tempoRestante = duracao;
      this.tv = 0;
      this.te = 0;
    }
  }
  
  class Escalonador {
    quantum: number;
    fila: Tarefa[];
    tempo: number;
  
    constructor(quantum: number) {
      this.quantum = quantum;
      this.fila = [];
      this.tempo = 0;
    }
  
    adicionaTarefa(tarefa: Tarefa): void {
      this.fila.push(tarefa);
    }
  
    escalona(): void {
      while (this.fila.length > 0) {
        const tarefaAtual = this.fila.shift(); // Pega a próxima tarefa da fila
  
        console.log(`Tempo ${this.tempo}: Tarefa t${tarefaAtual.id} em execução.`);
  
        if (tarefaAtual.tempoRestante <= this.quantum) {
          // Tarefa será concluída
          tarefaAtual.tv = this.tempo - tarefaAtual.ingresso + tarefaAtual.tempoRestante;
          tarefaAtual.te = tarefaAtual.tv - tarefaAtual.duracao;
          this.tempo += tarefaAtual.tempoRestante;
          tarefaAtual.tempoRestante = 0;
        } else {
          // Tarefa precisa ser interrompida temporariamente
          tarefaAtual.tv = this.tempo - tarefaAtual.ingresso + this.quantum;
          tarefaAtual.te = tarefaAtual.tv - tarefaAtual.duracao;
          this.tempo += this.quantum;
          tarefaAtual.tempoRestante -= this.quantum;
  
          // Adiciona a tarefa de volta à fila
          this.fila.push(tarefaAtual);
        }
      }
    }
  }
  
  const t1 = new Tarefa(1, 4, 40, 4);
  const t2 = new Tarefa(2, 1, 20, 2);
  const t3 = new Tarefa(3, 3, 50, 1);
  const t4 = new Tarefa(4, 0, 30, 3);
  
  const escalonador = new Escalonador(20);
  
  escalonador.adicionaTarefa(t1);
  escalonador.adicionaTarefa(t2);
  escalonador.adicionaTarefa(t3);
  escalonador.adicionaTarefa(t4);
  
  escalonador.escalona();
  
  console.log(`\nTempo de vida t1: ${t1.tv}, tempo de espera: ${t1.te}`);
  console.log(`Tempo de vida t2: ${t2.tv}, tempo de espera: ${t2.te}`);
  console.log(`Tempo de vida t3: ${t3.tv}, tempo de espera: ${t3.te}`);
  console.log(`Tempo de vida t4: ${t4.tv}, tempo de espera: ${t4.te}`);
  
  console.log(`\ntempo médio de vida: ${(t1.tv + t2.tv + t3.tv + t4.tv) / 4}`);
  console.log(`tempo médio de espera: ${(t1.te + t2.te + t3.te + t4.te) / 4}`);
  