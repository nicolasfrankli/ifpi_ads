var Account = /** @class */ (function () {
    function Account(numero, balanceInicial) {
        this._numero = numero;
        this._balance = balanceInicial;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.withdraw = function (valor) {
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._balance = this._balance - valor;
    };
    Account.prototype.transfer = function (valor, account) {
        if (this._balance < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._balance = this._balance - valor;
        account._balance = account._balance + valor;
    };
    return Account;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this._accounts = [];
    }
    Bank.prototype.search_account = function (id) {
        for (var _i = 0, _a = this._accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            if (id == account._numero) {
                return false;
            }
        }
    };
    Bank.prototype.add_account = function (account) {
        if (this.search_account(account._numero) != false) {
            this._accounts.push(account);
        }
    };
    return Bank;
}());
var conta1 = new Account('1', 100);
var conta2 = new Account('2', 100);
var c3;
conta1 = conta2;
c3 = conta1;
var inter = new Bank();
var nubank = new Bank();
inter.add_account(conta1);
nubank.add_account(conta2);
conta1.withdraw(10);
conta1.transfer(50, conta2);
console.log(conta1.balance);
console.log(conta2.balance);
console.log(c3.balance);
/*
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());*/ 
