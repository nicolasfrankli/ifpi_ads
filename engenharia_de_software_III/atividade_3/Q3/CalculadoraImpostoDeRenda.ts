export class CalculadoraImpostoDeRenda{
    constructor(){

    }

    calcular(rendimentos: number[], despesas: number[]): number{
        const rendaTotal: number = rendimentos.reduce((a, b) => a + b, 0);
        const despesaTotal: number = despesas.reduce((a, b) => a + b, 0);
        const baseCalculo: number = rendaTotal - despesaTotal;
    
        if (baseCalculo <= 1903.98) {
          return 0.0;
        }
        if (baseCalculo <= 2826.65) {
          return baseCalculo * 0.075 - 142.80;
        }
        // E assim por diante, para outros intervalos...
        return baseCalculo * 0.275 - 869.36; // Para bc acima de 4664.68
    }
}