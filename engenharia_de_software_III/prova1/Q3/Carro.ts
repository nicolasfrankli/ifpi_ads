export class Carro {
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
        if (this.quantidadeCombustivel < this.capacidadeMaxima * 0.1) {
            if ((this.quantidadeCombustivel + quantidade) <= this.capacidadeMaxima) {
                this.quantidadeCombustivel += quantidade;
                console.log("Abastecido!");
            } else {
                console.log("Capacidade máxima do tanque ultrapassada.");
            }
        }
    }
}

