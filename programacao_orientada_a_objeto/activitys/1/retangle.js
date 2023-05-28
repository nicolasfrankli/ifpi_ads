var Retangle = /** @class */ (function () {
    function Retangle() {
        this.length = 0;
        this.width = 0;
    }
    Retangle.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    Retangle.prototype.calculatePerimeter = function () {
        return (this.width * 2) + (this.length * 2);
    };
    Retangle.prototype.testRetangle = function () {
        return "(".concat(this.width, " * 2) + (").concat(this.length, " * 2) = ").concat(this.calculatePerimeter());
    };
    return Retangle;
}());
