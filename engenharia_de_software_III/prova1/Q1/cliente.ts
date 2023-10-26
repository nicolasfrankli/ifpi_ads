import { Pedido } from "./pedido";

export class Cliente {
    private nome: string;
    private pedidos: Pedido[];

    constructor(nome: string){
        this.nome= nome;
        this.pedidos = [];
    }

    public getNome(): string {
        return this.nome;
    }

    public  getPedidos(): Pedido[] {
        return this.pedidos;
    }

    public setPedidos(pedidos: Pedido[]) {
        this.pedidos = pedidos
    }
}

