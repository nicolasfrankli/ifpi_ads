var calculator = /** @class */ (function () {
    function calculator(number1, number2) {
        this.part1 = 0;
        this.part2 = 0;
        this.part1 = number1;
        this.part2 = number2;
    }
    calculator.prototype.sum = function (number1, number2) {
        return number1 + number2;
    };
    calculator.prototype.sub = function (number1, number2) {
        return number1 - number2;
    };
    return calculator;
}());
