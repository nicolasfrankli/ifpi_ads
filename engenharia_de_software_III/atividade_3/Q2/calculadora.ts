import { Operacao } from "./operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";
import { Divisao } from "./Divisao";

class Calculadora {
    private readonly a: number;
    private readonly b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    calcular (operacoes: Operacao[]): number[]{
        let resultados: number[] = [];
        for (const operacao of operacoes) {
            resultados.push(operacao.executar(this.a, this.b));
        }

        return resultados;
    }

}

const calculadora = new Calculadora(10, 5);
const operacoes = [new Soma(), new Subtracao(), new Multiplicacao(), new Divisao()];
const resultados = calculadora.calcular(operacoes);

console.log(resultados);
