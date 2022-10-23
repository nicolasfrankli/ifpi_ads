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
    deposit(value: number) {
        this._balance = this._balance + value;
    }
}

class Savings extends Account {
    private _interestRate: number;

    constructor(number: string, balance: number, interestRate: number) {
        super(number, balance);
        this._interestRate = interestRate;
    }
    public earnInterest(): void {
        this.deposit(this.balance * this._interestRate/100);
    }
    get interestRate(): number {
        return this._interestRate;
    }
}

class taxAccount extends Account {
    private _discountRate: number;

    constructor(number: string, balance: number, discountRate: number) {
        super(number, balance);
        this._discountRate = discountRate;
    }

    debit(value: number): void {
        let total = value * (1 + this._discountRate/100);
        super.withdraw(total);
    }
}

class Bank {
    public _accounts: Array<Account> = new Array<Account>();
    private bankTotalBalance: number = 0;

    search_account(id: String): any {
        let count: number = 0;
        for (var i = 0; i < this._accounts.length; i++) {
            if (id ==this._accounts[i]._numero){
                count++;
                break;
            }
        }
        if (count == 1){
            return this._accounts[i];
        } else {
            return false;
        }

    }

    add_account(account: Account): void {
        if (this.search_account(account._numero) == false) {
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
    earnInterest(number: String) {
        if (this.search_account(number) instanceof Savings) {
            (<Savings> this.search_account(number)).earnInterest();
        }
    }
}

let conta1: Account = new Account('1', 100);
let inter: Bank = new Bank();
inter.add_account(conta1);
console.log(inter.numberofAccounts());