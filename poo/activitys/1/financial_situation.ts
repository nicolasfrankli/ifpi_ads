class financialSituation{
    debtsAmount: number = 0;
    creditsAmount: number = 0;

    balance(): number{
        return this.creditsAmount - this.debtsAmount;
    }
}

let account1: financialSituation = new financialSituation();
account1.debtsAmount = 300;
account1.creditsAmount = 2000;
console.log(account1.balance());