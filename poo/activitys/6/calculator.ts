class calculator {
    private _part1: number = 0;
    private _part2: number = 0;

    /*get number1() {
        return this._part1;
    }

    get number2(){
        return this._part2;
    }*/

    constructor(number1: number, number2: number){
        this._part1 = number1;
        this._part2 = number2;
    }

    public sum(number1: number, number2: number){
        return number1 + number2;
    }
    public sub(number1: number, number2: number){
        return number1 - number2;
    }
}

class scientificCalculator extends calculator{
    public exponentiate(number1: number, number2: number){
        return number1**number2;
    }
}
let cassio: scientificCalculator = new scientificCalculator(5, 2);
console.log(cassio.exponentiate(5, 2));
