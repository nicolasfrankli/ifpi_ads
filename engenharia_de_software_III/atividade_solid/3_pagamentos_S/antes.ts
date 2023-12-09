class PagamentoA {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    processarPagamento(tipo: string): void {
        const processador: ProcessadorPagamentoA = obterProcessador(tipo);
        if (processador) {
            processador.processarPagamento(this.valor);
        } else {
            console.error("Tipo de pagamento não suportado");
        }
    }
}

class ProcessadorPagamentoA {
    processarPagamento(valor: number): void {
        console.error("Método genérico de processamento de pagamento");
    }
}

class PagamentoCartaoCreditoA extends ProcessadorPagamentoA {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento com cartão de crédito: R$${valor}`);
    }
}

class PagamentoTransferenciaBancariaA extends ProcessadorPagamentoA {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento com transferência bancária: R$${valor}`);
    }
}

function obterProcessador(tipo: string): ProcessadorPagamentoA | null {
    switch (tipo) {
        case "cartao_credito":
            return new PagamentoCartaoCredito();
        case "transferencia_bancaria":
            return new PagamentoTransferenciaBancaria();
        default:
            return null;
    }
}
