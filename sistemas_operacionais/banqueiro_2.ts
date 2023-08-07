function detectarDeadlock(recursosExistente: number[], recursosDisponiveis: number[], alocacaoCorrente: number[][], requisicoes: number[][]): void {
  const n = alocacaoCorrente.length;
  const m = recursosExistente.length; 

  const marcados = new Array(n).fill(false); 
  const processosDeadlock: number[] = []; 
  const processosSemDeadlock: number[] = [];

  let encontrouProcesso = true;

  while (encontrouProcesso) {
    encontrouProcesso = false;

    // Passo 1: Procure por um processo desmarcado Pi, para o qual a i-ésima linha de R seja menor ou igual à correspondente linha de recursosDisponiveis
    for (let i = 0; i < n; i++) {
      if (!marcados[i]) {
        let podeAlocar = true;

        for (let j = 0; j < m; j++) {
          if (requisicoes[i][j] > recursosDisponiveis[j]) {
            podeAlocar = false;
            break;
          }
        }

        if (podeAlocar) {
          // Passo 2: Marcar o processo, adicionar a i-ésima linha de alocacaoCorrente a recursosDisponiveis e voltar para o Passo 1
          encontrouProcesso = true;
          marcados[i] = true;

          for (let j = 0; j < m; j++) {
            recursosDisponiveis[j] += alocacaoCorrente[i][j];
          }

          break;
        }
      }
    }
  }

  // Passo 3: Verificar quais processos estão em deadlock e quais não estão
  for (let i = 0; i < n; i++) {
    if (marcados[i]) {
      processosSemDeadlock.push(i + 1);
    } else {
      processosDeadlock.push(i + 1);
    }
  }

  if (processosDeadlock.length > 0) {
    console.log("Deadlock detectado. Os seguintes processos estão em deadlock:");
    processosDeadlock.forEach((processo) => {
      console.log(`Processo ${processo}`);
    });
  } else {
    console.log("Nenhum deadlock detectado.");
  }

  if (processosSemDeadlock.length > 0) {
    console.log("Os seguintes processos não estão em deadlock:");
    processosSemDeadlock.forEach((processo) => {
      console.log(`Processo ${processo}`);
    });
  }
}


const recursosExistente = [4, 2, 3, 1];
const recursosDisponiveis = [2, 1, 0, 0];
const alocacaoCorrente = [
  [0, 0, 1, 0],
  [2, 0, 0, 1],
  [0, 1, 2, 0]
];
const requisicoes = [
  [2, 0, 0, 1],
  [1, 0, 1, 0],
  [2, 1, 0, 1],
];

detectarDeadlock(recursosExistente, recursosDisponiveis, alocacaoCorrente, requisicoes);