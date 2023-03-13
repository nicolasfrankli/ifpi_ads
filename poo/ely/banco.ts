import { ContaJaCadastradaError, ContaNaoEncontradaError, PoupancaInvalidaError, SaldoInsuficienteError, ValorInvalidoError } from "./excecoes";

class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        //this.validarValor(saldo);
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        if (this._saldo < valor) {
            throw new SaldoInsuficienteError("Saldo insuficiente.");
        }

        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }

    private validarValor(valor: number): boolean {
        if (isNaN(valor) || valor <= 0) {
            throw new ValorInvalidoError("Valor inválido: + " + valor);
        }

        return true;
    }
}


class Poupanca extends Conta {
    private _taxaDejuros: number;

    public get taxaDeJuros(): number {
        return this._taxaDejuros;
    }

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero, saldo);
        this._taxaDejuros = taxaDeJuros;
    }

    public renderJuros() {
        let saldo = this.saldo;
        this.depositar(saldo * this.taxaDeJuros / 100);
    }

}

class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }

    sacar(valor: number) {
        let valorTotal = valor + valor * this._taxaDeDesconto / 100;
        super.sacar(valorTotal);
    }
}

interface Tributavel {
    calculaTributos(): number;
}

class ContaCorrente extends Conta implements Tributavel {
    calculaTributos(): number {
        return this.saldo * 0.10;
    }
    
}

class SeguroDeVida implements Tributavel {
    calculaTributos(): number {
       return 50.00;
    }

}

class AuditoriaInterna {
    private _tributaveis: Tributavel[] = [];

    adicionar(tributavel: Tributavel) {
        this._tributaveis.push(tributavel);
    }

    calcularTributos(): number {
        let total: number = 0.0;
        for (let i: number = 0; i < this._tributaveis.length; i++) {
            total = total + this._tributaveis[i].calculaTributos();
        }

        return total;
    }
}

class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta): void {
        try {
            this.consultar(conta.numero);
            throw new ContaJaCadastradaError(`Conta já cadastrada: ${conta.numero}`);
        } catch (e: any) {
            if (e instanceof ContaJaCadastradaError) {
                throw e;
            }
            this._contas.push(conta);
        }
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
            }
        }

        if (!contaProcurada) {
            throw new ContaNaoEncontradaError("Conta não encontrada: " + numero);
        }

        return contaProcurada;
    }

    private consultarComFilter(numero: string): Conta {
        return this._contas.filter(conta => conta.numero == numero)[0];
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }
        }

        if (indiceProcurado == -1) {
            throw new ContaNaoEncontradaError("Conta não encontrada: " + numero);
        }

        return indiceProcurado;
    }


    alterar(conta: Conta): void {
        let indice: number = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    }

    depositar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);
        this._contas[indice].depositar(valor);
    }

    sacar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);
        this._contas[indice].sacar(valor);
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);
        for (var i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number): void {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos(): number {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    }

    renderJuros(numero: string): void {
        let contaProcurada: Conta = this.consultar(numero);
        
        if (!(contaProcurada instanceof Poupanca)) {
           throw new PoupancaInvalidaError(`Poupança inválida: ${numero}`);
        } 

        contaProcurada.renderJuros();
    }


    listaContas(): string {
        let listaStrings = '';
        for (let i: number = 0; i < this._contas.length; i++) {
            listaStrings = listaStrings +
                ' Numero: ' + this._contas[i].numero +
                ' - Saldo: ' + this._contas[i].saldo + '\n';

        }

        return listaStrings;
    }

}




export {ContaCorrente, SeguroDeVida, AuditoriaInterna, Conta, Banco, Poupanca, ContaImposto }
