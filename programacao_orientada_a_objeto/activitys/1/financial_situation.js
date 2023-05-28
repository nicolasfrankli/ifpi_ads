var financialSituation = /** @class */ (function () {
    function financialSituation() {
        this.debtsAmount = 0;
        this.creditsAmount = 0;
    }
    financialSituation.prototype.balance = function () {
        return this.creditsAmount - this.debtsAmount;
    };
    return financialSituation;
}());
var account1 = new financialSituation();
account1.debtsAmount = 300;
account1.creditsAmount = 2000;
console.log(account1.balance());
