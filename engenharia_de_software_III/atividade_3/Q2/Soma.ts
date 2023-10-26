import { Operacao } from "./operacao";

export class Soma implements Operacao {
    public executar(a: number, b: number): number {
        return a + b;
    }
}