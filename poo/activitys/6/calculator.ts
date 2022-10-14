class calculator {
    private part1: number = 0;
    private part2: number = 0;

    constructor(number1: number, number2: number){
        this.part1 = number1;
        this.part2 = number2;
    }

    public sum(number1: number, number2: number){
        return number1 + number2;
    }
    public sub(number1: number, number2: number){
        return number1 - number2;
    }
}
