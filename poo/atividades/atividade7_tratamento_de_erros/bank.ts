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

class Bank {
    public _accounts: Account[] = [];

    search_account(id: String): boolean {
        for (let account of this._accounts) {
            if (id == account._numero){
                return false;
            }
        }
    }

    add_account(account: Account): void {
        if (this.search_account(account._numero) != false) {
            this._accounts.push(account)
        }
    }
}

let conta1: Account = new Account('1', 100);
let conta2: Account = new Account('2', 100);
let c3: Account;
conta1 = conta2;
c3 = conta1;
let inter: Bank = new Bank();
let nubank: Bank = new Bank();
inter.add_account(conta1);
nubank.add_account(conta2);
conta1.withdraw(10);
conta1.transfer(50, conta2)
console.log(conta1.balance)
console.log(conta2.balance)
console.log(c3.balance)

