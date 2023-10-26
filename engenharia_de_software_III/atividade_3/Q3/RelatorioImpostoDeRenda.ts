export class RelatorioImpostoDeRenda{

    constructor(){

    }

    gerarRelatorio(cpf: string, rendimentos: number[], despesas: number[], impostos: number): void {
        console.log("CPF: " + cpf);
        console.log("Rendimentos: " + rendimentos);
        console.log("Despesas: " + despesas);
        console.log("Imposto Devido: " + impostos);
    }
}