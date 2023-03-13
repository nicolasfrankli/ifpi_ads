"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = exports.taxAccount = exports.Savings = exports.Account = void 0;
var utils_error_js_1 = require("./utils_error.js");
var Account = /** @class */ (function () {
    function Account(numero, balanceInicial) {
        this._number = numero;
        this._balance = balanceInicial;
        if (this._balance < 0) {
            throw new Error('Value must be greater than 0.');
        }
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.validateValue = function (value) {
        if (value <= 0) {
            throw new utils_error_js_1.InvalidValueError('Value must be greater than 0.');
        }
        else {
            return value;
        }
    };
    Account.prototype.withdraw = function (value) {
        var validatedValue = this.validateValue(value);
        if (this._balance < validatedValue) {
            throw new utils_error_js_1.insufficientFunds('Insufficient funds.');
        }
        this._balance = this._balance - value;
    };
    Account.prototype.transfer = function (value, account) {
        var validatedValue = this.validateValue(value);
        if (this._balance < validatedValue) {
            throw new utils_error_js_1.insufficientFunds('Insufficient funds.');
        }
        this._balance = this._balance - validatedValue;
        account._balance = account._balance + validatedValue;
    };
    Account.prototype.deposit = function (value) {
        var validatedValue = this.validateValue(value);
        this._balance = this._balance + validatedValue;
    };
    return Account;
}());
exports.Account = Account;
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(number, balance, interestRate) {
        var _this = _super.call(this, number, balance) || this;
        _this._interestRate = interestRate;
        return _this;
    }
    Object.defineProperty(Savings.prototype, "interestRate", {
        get: function () {
            return this._interestRate;
        },
        enumerable: false,
        configurable: true
    });
    Savings.prototype.earnInterest = function () {
        this.deposit(this.balance * this._interestRate / 100);
    };
    return Savings;
}(Account));
exports.Savings = Savings;
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
exports.taxAccount = taxAccount;
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.calculateTributes = function () {
        return this.balance * 0.10;
    };
    return CurrentAccount;
}(Account));
var LifeInsurance = /** @class */ (function () {
    function LifeInsurance() {
    }
    LifeInsurance.prototype.calculateTributes = function () {
        return 50.00;
    };
    return LifeInsurance;
}());
var InternalAudit = /** @class */ (function () {
    function InternalAudit() {
        this._taxable = [];
    }
    InternalAudit.prototype.add = function (taxable) {
        this._taxable.push(taxable);
    };
    InternalAudit.prototype.calculateTributes = function () {
        var total = 0.0;
        for (var i = 0; i < this._taxable.length; i++) {
            total = total + this._taxable[i].calculateTributes();
        }
        return total;
    };
    return InternalAudit;
}());
var account = new CurrentAccount("1", 200);
account.withdraw(10000);
var Bank = /** @class */ (function () {
    function Bank() {
        this._accounts = new Array();
        this.bankTotalBalance = 0;
    }
    Bank.prototype.Query = function (id) {
        var wantedAccount;
        for (var i = 0; i < this._accounts.length; i++) {
            if (id == this._accounts[i]._number) {
                return wantedAccount;
            }
            break;
        }
        throw new utils_error_js_1.accountNotFound("Account does not exist.");
    };
    Bank.prototype.QueryByIndex = function (id) {
        var wantedIndex = -1;
        for (var i = 0; i < this._accounts.length; i++) {
            if (id == this._accounts[i]._number) {
                wantedIndex = i;
            }
        }
        return wantedIndex;
    };
    Bank.prototype.addAccount = function (account) {
        try {
            this.Query(account._number);
        }
        catch (abacate) {
            this._accounts.push(account);
        }
    };
    Bank.prototype.numberofAccounts = function () {
        return this._accounts.length;
    };
    Bank.prototype.totalBalance = function () {
        for (var _i = 0, _a = this._accounts; _i < _a.length; _i++) {
            var account_1 = _a[_i];
            this.bankTotalBalance += account_1.balance;
        }
        return this.bankTotalBalance;
    };
    Bank.prototype.averageAccountBalance = function () {
        return "".concat((this.bankTotalBalance / this.numberofAccounts()).toFixed(2));
    };
    Bank.prototype.earnInterest = function (number) {
        if (this.Query(number) instanceof Savings) {
            this.Query(number).earnInterest();
        }
        else {
            throw new utils_error_js_1.InvalidSavingError('The account must be a saving to earn interest.');
        }
    };
    Bank.prototype.listAccounts = function () {
        var listaString = '';
        for (var i = 0; i < this._accounts.length; i++) {
            var account_2 = this._accounts[i];
            listaString = listaString + "N\u00FAmero: ".concat(account_2._number, "\n Saldo: ").concat(account_2.balance);
        }
        return listaString;
    };
    Bank.prototype.withdraw = function (value, number) {
        var account = this.Query(number);
        account.withdraw(value);
    };
    Bank.prototype.deposit = function (value, number) {
        var account = this.Query(number);
        account.deposit(value);
    };
    Bank.prototype.delete = function (number) {
        var index = this.QueryByIndex(number);
        for (var i = index; i < this._accounts.length; i++) {
            this._accounts[i] = this._accounts[i + 1];
        }
        this._accounts.pop();
    };
    Bank.prototype.transfer = function (numberDebit, numberCredit, value) {
        var creditAccount = this.Query(numberCredit);
        var debitAccount = this.Query(numberDebit);
        debitAccount.transfer(value, creditAccount);
    };
    return Bank;
}());
exports.Bank = Bank;
