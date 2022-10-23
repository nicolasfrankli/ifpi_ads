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
var calculator = /** @class */ (function () {
    /*get number1() {
        return this._part1;
    }

    get number2(){
        return this._part2;
    }*/
    function calculator(number1, number2) {
        this._part1 = 0;
        this._part2 = 0;
        this._part1 = number1;
        this._part2 = number2;
    }
    calculator.prototype.sum = function (number1, number2) {
        return number1 + number2;
    };
    calculator.prototype.sub = function (number1, number2) {
        return number1 - number2;
    };
    return calculator;
}());
var scientificCalculator = /** @class */ (function (_super) {
    __extends(scientificCalculator, _super);
    function scientificCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    scientificCalculator.prototype.exponentiate = function (number1, number2) {
        return Math.pow(number1, number2);
    };
    return scientificCalculator;
}(calculator));
var cassio = new scientificCalculator(5, 2);
console.log(cassio.exponentiate(5, 2));
