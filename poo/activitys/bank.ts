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
    withdraw(valor: number){
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._balance = this._balance - valor;
    }
    transfer(valor: number, account) {
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.')
        }
        this._balance = this._balance - valor;
        account._balance = account._balance + valor;
    }
}

class Bank {
    public _accounts: Array<Account> = new Array<Account>();
    private bankTotalBalance: number = 0;

    search_account(id: String): boolean {
        let count: number = 0;
        for (let account of this._accounts) {
            if (id == account._numero){
                return false;
            }
            count++
        }
        if (count == this._accounts.length - 1){
            return true;
        }

    }

    add_account(account: Account): void {
        if (this.search_account(account._numero) != false) {
            this._accounts.push(account)
        }
    }

    numberofAccounts(): number{
        return this._accounts.length;
    }

    totalBalance(): number{
        for (let account of this._accounts){
            this.bankTotalBalance += account.balance;
        }
        return this.bankTotalBalance;
    }
    averageAccountBalance(): String{
        return `${(this.bankTotalBalance / this.numberofAccounts()).toFixed(2)}`;
    }
}

let conta1: Account = new Account('1', 100);
let conta2: Account = new Account('2', 100);
let c3: Account = new Account('3', 1000);
let inter: Bank = new Bank();
let nubank: Bank = new Bank();
inter.add_account(conta1);
nubank.add_account(conta2);
inter.add_account(c3);
console.log(inter.numberofAccounts());

