function detectarDeadlock(recursosExistente, recursosDisponiveis, alocacaoCorrente, requisicoes) {
    var n = alocacaoCorrente.length;
    var m = recursosExistente.length;
    var marcados = new Array(n).fill(false);
    var processosDeadlock = [];
    var processosSemDeadlock = [];
    var encontrouProcesso = true;
    while (encontrouProcesso) {
        encontrouProcesso = false;
        // Passo 1: Procure por um processo desmarcado Pi, para o qual a i-ésima linha de R seja menor ou igual à correspondente linha de recursosDisponiveis
        for (var i = 0; i < n; i++) {
            if (!marcados[i]) {
                var podeAlocar = true;
                for (var j = 0; j < m; j++) {
                    if (requisicoes[i][j] > recursosDisponiveis[j]) {
                        podeAlocar = false;
                        break;
                    }
                }
                if (podeAlocar) {
                    // Passo 2: Marcar o processo, adicionar a i-ésima linha de alocacaoCorrente a recursosDisponiveis e voltar para o Passo 1
                    encontrouProcesso = true;
                    marcados[i] = true;
                    for (var j = 0; j < m; j++) {
                        recursosDisponiveis[j] += alocacaoCorrente[i][j];
                    }
                    break;
                }
            }
        }
    }
    // Passo 3: Verificar quais processos estão em deadlock e quais não estão
    for (var i = 0; i < n; i++) {
        if (marcados[i]) {
            processosSemDeadlock.push(i + 1);
        }
        else {
            processosDeadlock.push(i + 1);
        }
    }
    if (processosDeadlock.length > 0) {
        console.log("Deadlock detectado. Os seguintes processos estão em deadlock:");
        processosDeadlock.forEach(function (processo) {
            console.log("Processo ".concat(processo));
        });
    }
    else {
        console.log("Nenhum deadlock detectado.");
    }
    if (processosSemDeadlock.length > 0) {
        console.log("Os seguintes processos não estão em deadlock:");
        processosSemDeadlock.forEach(function (processo) {
            console.log("Processo ".concat(processo));
        });
    }
}
var recursosExistente = [4, 2, 3, 1];
var recursosDisponiveis = [2, 1, 0, 0];
var alocacaoCorrente = [
    [0, 0, 1, 0],
    [2, 0, 0, 1],
    [0, 1, 2, 0]
];
var requisicoes = [
    [2, 0, 0, 1],
    [1, 0, 1, 0],
    [2, 1, 0, 1],
];
detectarDeadlock(recursosExistente, recursosDisponiveis, alocacaoCorrente, requisicoes);
