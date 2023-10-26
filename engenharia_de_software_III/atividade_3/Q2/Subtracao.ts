import { Operacao } from "./operacao";

export class Subtracao implements Operacao {
    public executar(a: number, b: number): number {
        return a - b;
    }
}