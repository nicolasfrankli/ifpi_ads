class Pedido {
    items: ItemPedido[];
    cliente: Cliente;

    constructor(items: ItemPedido[], cliente: Cliente) {
        this.items = items;
        this.cliente = cliente;
    }

    calcularTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.preco;
        }
        return total;
    }

    realizarPagamento(valor: number, forma_de_pagamento: string): void {
        switch (forma_de_pagamento) {
            case "cartao_credito":
                return;
            case "transferencia_bancaria":
                return;
            default:
                return;
        }
    }
}

class Cliente {
    nome: string;
    endereco: string;

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }
}

class ItemPedido {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

