import { Cliente } from "./cliente"

export class Pedido {
    private valorTotal: number;
    private cliente: Cliente;

    constructor(valorTotal: number, cliente: Cliente){
        this.valorTotal = valorTotal;
        this.cliente = cliente;
    }


    public getValorTotal(): number {
        return this.valorTotal;
    }

    public  getCliente(): Cliente {
        return this.cliente;
    }

    public calcularDesconto(): number {
        return this.getValorTotal() * 0.1;
    }

    public processarPedido(): void {
        this.valorTotal -= this.calcularDesconto();
        let pedidos: Pedido[] = this.cliente.getPedidos();
        pedidos.push(this)
        this.cliente.setPedidos(pedidos)
    }
}
