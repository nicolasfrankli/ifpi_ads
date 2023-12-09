abstract class ProcessadorPagamento {
    abstract processarPagamento(valor: number): void;
}

class Pagamento {
    valor: number;
    processador: ProcessadorPagamento;

    constructor(valor: number, processador: ProcessadorPagamento) {
        this.valor = valor;
        this.processador = processador;
    }

    processarPagamento(): void {
        this.processador.processarPagamento(this.valor);
    }
}

class PagamentoCartaoCredito extends ProcessadorPagamento {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento com cartão de crédito: R$${valor}`);
    }
}

class PagamentoTransferenciaBancaria extends ProcessadorPagamento {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento com transferência bancária: R$${valor}`);
    }
}
