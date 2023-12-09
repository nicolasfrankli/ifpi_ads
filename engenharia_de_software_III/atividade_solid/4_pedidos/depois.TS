interface ProcessadorPagamento {
    realizarPagamento(valor: number): void;
}

class Pedido {
    items: ItemPedido[];
    cliente: Cliente;
    processadorPagamento: ProcessadorPagamento;

    constructor(items: ItemPedido[], cliente: Cliente, processadorPagamento: ProcessadorPagamento) {
        this.items = items;
        this.cliente = cliente;
        this.processadorPagamento = processadorPagamento;
    }

    calcularTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.preco;
        }
        return total;
    }

    realizarPagamento(): void {
        const valorTotal = this.calcularTotal();
        this.processadorPagamento.realizarPagamento(valorTotal);
    }
}

class PagamentoCartaoCredito implements ProcessadorPagamento {
    realizarPagamento(valor: number): void {
        console.log(`Processando pagamento com cartão de crédito: R$${valor}`);
    }
}

class PagamentoTransferenciaBancaria implements ProcessadorPagamento
