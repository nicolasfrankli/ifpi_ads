var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
    }
    Triangle.prototype.isTriangle = function () {
        if (Math.abs(this.side2 - this.side3) < this.side1 && this.side1 < this.side2 + this.side3) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangle.prototype.ordenedSide = function () {
        var triangleSides = new Array(this.side1, this.side2, this.side3);
        ordenar_vector_bubble(triangleSides);
        return triangleSides;
    };
    Triangle.prototype.isIsoceles = function () {
        if (this.isTriangle() && this.side1 == this.side2 || this.side1 == this.side3 || this.side3 == this.side2) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangle.prototype.isEquilateral = function () {
        if (this.isTriangle() && this.side1 == this.side2 && this.side1 == this.side3) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangle.prototype.isScalene = function () {
        if (this.isTriangle() && this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangle.prototype.isRight = function () {
        if (this.isTriangle() && (Math.pow(this.ordenedSide()[2], 2)) == (Math.pow(this.ordenedSide()[1], 2)) + Math.pow(this.ordenedSide()[0], 2)) {
            return true;
        }
        else {
            return false;
        }
    };
    return Triangle;
}());
function ordenar_vector_bubble(vector) {
    var houveTroca = false;
    var count = 0;
    var auxiliar;
    var k = 0;
    for (var i = 0; i < vector.length - 1; i++) {
        houveTroca = false;
        for (var j = 0; j < vector.length - 1 - k; j++) {
            if (vector[j] > vector[j + 1]) {
                houveTroca = true;
                auxiliar = vector[j];
                vector[j] = vector[j + 1];
                vector[j + 1] = auxiliar;
            }
            count++;
        }
        if (!houveTroca) {
            break;
        }
        k++;
    }
    return vector;
}
var t1 = new Triangle(4, 5, 3);
console.log(t1.isRight());
console.log(t1.ordenedSide()[2]);
