class calculator {
    private _part1: number = 0;
    private _part2: number = 0;

    constructor(number1: number, number2: number) {
        this._part1 = number1;
        this._part2 = number2;
    }

    get number1(){
        return this._part1;
    }
    get number2(){
        return this._part2;
    }

    public sum(): number{
        return this._part1 + this._part2;
    }
    public sub(): number{
        return this._part1 - this._part2;
    }
}

class scientificCalculator extends calculator{
    public exponentiate(){
        return this.number1**this.number2;
    }
}
let cassio: calculator = new scientificCalculator(5, 2);
let calc1: calculator = new calculator(1,10);
console.log(calc1.sum());
//console.log(cassio.exponentiate());