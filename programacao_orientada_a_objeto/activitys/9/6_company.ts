abstract class Employee {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    get salary() : number {
        return this._salary;
    }

    abstract getBonus(): number;
}

class Manager extends Employee {
    getBonus(): number {
       return this.salary * 0.40;
    }
}

class Director extends Manager {
    getBonus(): number {
        return this.salary * 0.60;
     } 
}

class President extends Employee {
    getBonus(): number {
       return 2 * this.salary + 1000;
    }
}


let manager: Employee = new Manager(1000);
let director: Employee = new Director(1000);
let president: Employee = new President(1000);

console.log(manager.getBonus());
console.log(director.getBonus());
console.log(president.getBonus());