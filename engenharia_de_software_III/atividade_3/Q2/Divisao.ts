import { Operacao } from "./operacao";

export class Divisao implements Operacao{
    executar(a: number, b: number): number{
        return a / b;
    }
}