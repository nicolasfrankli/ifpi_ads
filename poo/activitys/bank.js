var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Account.prototype.deposit = function (value) {
        this._balance = this._balance + value;
    };
    return Account;
}());
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(number, balance, interestRate) {
        var _this = _super.call(this, number, balance) || this;
        _this._interestRate = interestRate;
        return _this;
    }
    Savings.prototype.earnInterest = function () {
        this.deposit(this.balance * this._interestRate / 100);
    };
    Object.defineProperty(Savings.prototype, "interestRate", {
        get: function () {
            return this._interestRate;
        },
        enumerable: false,
        configurable: true
    });
    return Savings;
}(Account));
var taxAccount = /** @class */ (function (_super) {
    __extends(taxAccount, _super);
    function taxAccount(number, balance, discountRate) {
        var _this = _super.call(this, number, balance) || this;
        _this._discountRate = discountRate;
        return _this;
    }
    taxAccount.prototype.debit = function (value) {
        var total = value * (1 + this._discountRate / 100);
        _super.prototype.withdraw.call(this, total);
    };
    return taxAccount;
}(Account));
var Bank = /** @class */ (function () {
    function Bank() {
        this._accounts = new Array();
        this.bankTotalBalance = 0;
    }
    Bank.prototype.search_account = function (id) {
        var count = 0;
        for (var i = 0; i < this._accounts.length; i++) {
            if (id == this._accounts[i]._numero) {
                count++;
                break;
            }
        }
        if (count == 1) {
            return this._accounts[i];
        }
        else {
            return false;
        }
    };
    Bank.prototype.add_account = function (account) {
        if (this.search_account(account._numero) == false) {
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
    Bank.prototype.earnInterest = function (number) {
        if (this.search_account(number) instanceof Savings) {
            this.search_account(number).earnInterest();
        }
    };
    return Bank;
}());
var conta1 = new Account('1', 100);
var inter = new Bank();
inter.add_account(conta1);
console.log(inter.numberofAccounts());
