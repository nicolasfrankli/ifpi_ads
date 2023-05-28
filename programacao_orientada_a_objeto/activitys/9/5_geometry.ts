abstract class abstractClass {
    abstract printSomething(): void ;
}

class concreteClass extends abstractClass {
    printSomething(): void {
        console.log("Hello");
    }
}

abstract class geometricFigure{
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

interface IGeometricFigure {
    calculateArea(): number;
    calculatePerimeter(): number;
}

interface IComparable {
    compare(comparavel: IGeometricFigure): number;
}

class Square implements IGeometricFigure, IComparable {
    private _side: number;

    constructor(lado: number){
        this._side = lado;
    }
    
    compare(geometricFigure: IGeometricFigure): number {
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
    }

    calculateArea(): number {
        return this._side * this._side;
    }

    calculatePerimeter(): number {
        return this._side * 4;
    }
}

class Circle implements IGeometricFigure {
    private _radius: number;

    constructor(raio: number) {
        this._radius = raio;
    }

    calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this._radius;
    }

}

let circle: geometricFigure = new Circle(3);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());


let figuras: geometricFigure[] = new Array();
figuras[0] = circle;

let square: Square = new Square(2);

console.log(square.compare(circle));