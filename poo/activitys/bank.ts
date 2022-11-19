import {InvalidValueError, insufficientFunds, accountNotFound, InvalidSavingError} from "./utils_error.js"

export class Account {
    public _number: String;
    private _balance: number;
    
    get balance() {
        return this._balance;
    }

    constructor(numero: string, balanceInicial: number) {
        this._number = numero;
        this._balance = balanceInicial;
        if (this._balance < 0) {
            throw new Error('Value must be greater than 0.');
        } 
    }


    private validateValue(value: number):number {
        if (value <= 0) {
            throw new InvalidValueError('Value must be greater than 0.');
        } else {
            return value;
        }
    } 

    withdraw(value: number): void{ //Saque
        let validatedValue = this.validateValue(value);
        if (this._balance < validatedValue) {
            throw new insufficientFunds('Insufficient funds.');
        }
        this._balance = this._balance - value;
    }
    transfer(value: number, account: Account): void {
        let validatedValue = this.validateValue(value);
        if (this._balance < validatedValue) {
            throw new insufficientFunds('Insufficient funds.');
        }
        this._balance = this._balance - validatedValue;  
        account._balance = account._balance + validatedValue;
    }
    deposit(value: number): void {
        let validatedValue = this.validateValue(value);
        this._balance = this._balance + validatedValue;
    }
}

export class Savings extends Account {
    private _interestRate: number;
    
    get interestRate(): number {
        return this._interestRate;
    }
    
    constructor(number: string, balance: number, interestRate: number) {
        super(number, balance);
        this._interestRate = interestRate;
    }
    public earnInterest(): void {
        this.deposit(this.balance * this._interestRate/100);
    }
}

export class taxAccount extends Account {
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

interface Taxable {
    calculateTributes(): number;
}

class CurrentAccount extends Account implements Taxable {
    calculateTributes(): number {
        return this.balance * 0.10;
    }
    
}

class LifeInsurance implements Taxable {
    calculateTributes(): number {
       return 50.00;
    }

}

class InternalAudit {
    private _taxable: Taxable[] = [];

    add(taxable: Taxable) {
        this._taxable.push(taxable);
    }

    calculateTributes(): number {
        let total: number = 0.0;
        for (let i: number = 0; i < this._taxable.length; i++) {
            total = total + this._taxable[i].calculateTributes();
        }

        return total;
    }
}

let account: CurrentAccount = new CurrentAccount("1", 200);
let insurance1: LifeInsurance = new LifeInsurance();
let insurance2: LifeInsurance = new LifeInsurance();

let internalAudit: InternalAudit = new InternalAudit();
internalAudit.add(account);
internalAudit.add(insurance1);
internalAudit.add(insurance2);

console.log(internalAudit.calculateTributes());

export class Bank {
    public _accounts: Array<Account> = new Array<Account>();
    private bankTotalBalance: number = 0;

    Query(id: String): Account {
        let wantedAccount!: Account;
        for (let i = 0; i < this._accounts.length; i++) {
            if (id == this._accounts[i]._number){
                return wantedAccount;
            }
            break
        }
        
        throw new accountNotFound("Account does not exist.");
    }
    QueryByIndex(id: String): number {
        let wantedIndex: number = -1;
        for (let i = 0; i < this._accounts.length; i++) {
            if (id == this._accounts[i]._number){
                wantedIndex = i;
            }
        }
        return wantedIndex;
    }
    addAccount(account: Account): void {
        try {
            this.Query(account._number)
        } catch (abacate) {
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
        if (this.Query(number) instanceof Savings) {
            (<Savings> this.Query(number)).earnInterest();
        } else {
            throw new InvalidSavingError('The account must be a saving to earn interest.')
        }
    }
    listAccounts(): string {
        let listaString = '';
        for (let i: number = 0; i < this._accounts.length; i++) {
            const account = this._accounts[i];
            listaString = listaString + `Número: ${account._number}\n Saldo: ${account.balance}`;
        }
        return listaString;
    } 

    withdraw(value: number, number: string): void {
        let account = this.Query(number);
        account.withdraw(value);
    }

    deposit(value: number, number: string): void {
        let account = this.Query(number);
        account.deposit(value);
    }

    delete(number: string): void {
        let index: number = this.QueryByIndex(number);
        for (var i = index; i < this._accounts.length; i++) {
            this._accounts[i] = this._accounts[i + 1];
        }
        this._accounts.pop();
    }

    transfer(numberDebit: string, numberCredit: string, value: number): void {
        let creditAccount: Account = this.Query(numberCredit);
        let debitAccount: Account = this.Query(numberDebit);
        debitAccount.transfer(value, creditAccount);
    }
}