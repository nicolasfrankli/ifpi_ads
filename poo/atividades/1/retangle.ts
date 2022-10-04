class Retangle {
    length: number = 0;
    width: number = 0;

    calculateArea(): number {
        return this.length * this.width;
    }

    calculatePerimeter(): number {
        return (this.width * 2) + (this.length * 2);
    }

    testRetangle(): string {
        return `(${this.width} * 2) + (${this.length} * 2) = ${this.calculatePerimeter()}`;
    }

}
