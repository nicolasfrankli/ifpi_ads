class Account {
    public _numero: String;
    private _balance: number;
    constructor(numero, balanceInicial) {
        this._numero = numero;
        this._balance = balanceInicial;
    }
    get balance() {
        return this._balance;
    }
    withdraw(valor: number) {
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._balance = this._balance - valor;
    }
    transfer(valor, account) {
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.')
        }
        this._balance = this._balance - valor;
        account._balance = account._balance + valor;
    }
}