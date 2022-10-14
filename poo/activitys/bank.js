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
        this._accounts = new Array();
        this.bankTotalBalance = 0;
    }
    Bank.prototype.search_account = function (id) {
        var count = 0;
        for (var _i = 0, _a = this._accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            if (id == account._numero) {
                return false;
            }
            count++;
        }
        if (count == this._accounts.length - 1) {
            return true;
        }
    };
    Bank.prototype.add_account = function (account) {
        if (this.search_account(account._numero) != false) {
            this._accounts.push(account);
        }
    };
    Bank.prototype.numberofAccounts = function () {
        return this._accounts.length;
    };
    Bank.prototype.totalBalance = function () {
        for (var _i = 0, _a = this._accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            this.bankTotalBalance += account.balance;
        }
        return this.bankTotalBalance;
    };
    Bank.prototype.averageAccountBalance = function () {
        return "".concat((this.bankTotalBalance / this.numberofAccounts()).toFixed(2));
    };
    return Bank;
}());
var conta1 = new Account('1', 100);
var conta2 = new Account('2', 100);
var c3 = new Account('3', 1000);
var inter = new Bank();
var nubank = new Bank();
inter.add_account(conta1);
nubank.add_account(conta2);
inter.add_account(c3);
console.log(inter.numberofAccounts());
