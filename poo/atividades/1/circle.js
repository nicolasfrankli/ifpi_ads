var Circle = /** @class */ (function () {
    function Circle() {
        this.radius = 0;
    }
    Circle.prototype.calculateArea = function () {
        return (Math.pow(this.radius, 2)) * Math.PI;
    };
    Circle.prototype.calculatePerimeter = function () {
        return this.radius * 2 * Math.PI;
    };
    return Circle;
}());
var circle1 = new Circle();
circle1.radius = 5;
console.log("Area:".concat(circle1.calculateArea().toFixed(2), "\nPerimeter:").concat(circle1.calculatePerimeter()));
