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
var abstractClass = /** @class */ (function () {
    function abstractClass() {
    }
    return abstractClass;
}());
var concreteClass = /** @class */ (function (_super) {
    __extends(concreteClass, _super);
    function concreteClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    concreteClass.prototype.printSomething = function () {
        console.log("Hello");
    };
    return concreteClass;
}(abstractClass));
var geometricFigure = /** @class */ (function () {
    function geometricFigure() {
    }
    return geometricFigure;
}());
var Square = /** @class */ (function () {
    function Square(lado) {
        this._side = lado;
    }
    Square.prototype.compare = function (geometricFigure) {
        if (this.calculateArea() < geometricFigure.calculateArea()) {
            return -1;
        }
        if (this.calculateArea() > geometricFigure.calculateArea()) {
            return 1;
        }
        if (this.calculateArea() == geometricFigure.calculateArea()) {
            return 0;
        }
        return NaN;
    };
    Square.prototype.calculateArea = function () {
        return this._side * this._side;
    };
    Square.prototype.calculatePerimeter = function () {
        return this._side * 4;
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle(raio) {
        this._radius = raio;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this._radius * this._radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this._radius;
    };
    return Circle;
}());
var circle = new Circle(3);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
var figuras = new Array();
figuras[0] = circle;
var square = new Square(2);
console.log(square.compare(circle));
