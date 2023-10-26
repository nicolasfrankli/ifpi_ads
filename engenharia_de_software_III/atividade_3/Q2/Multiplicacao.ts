import { Operacao } from "./operacao";

export class Multiplicacao implements Operacao{
    executar(a: number, b: number): number{
        return a * b;
    }
}