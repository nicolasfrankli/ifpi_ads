export class Carro1 {
    quantidadeCombustivel: number;
    capacidadeMaxima: number = 50; // em litros


    constructor(quantidadeCombustivel: number){
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    public getQuantidadeCombustivel(): number {
        return this.quantidadeCombustivel;
    }

    public getCapacidadeMaxima(): number {
        return this.capacidadeMaxima;
    }

    public reabastecerSeNecessario(quantidade: number) {
        if (this.quantidadeCombustivel >= this.capacidadeMaxima * 0.1){
            throw new Error("Não é necessário abastecer!")
        }
        if ((this.quantidadeCombustivel + quantidade) > this.capacidadeMaxima){
            throw new Error("Capacidade máxima do tanque ultrapassada.")
        }

        this.quantidadeCombustivel += quantidade;
        console.log("Abastecido!");
    }
}

