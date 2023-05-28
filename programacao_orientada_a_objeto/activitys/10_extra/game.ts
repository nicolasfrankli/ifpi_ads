interface Defensible {
    isDown(): boolean;
    defendAttack(attackvalue: number): void;
}

class warrior implements Defensible{
    id: number;
    description: string;
    damage: number;
    life: number = 10;

    constructor(idNumber: number, description: string, damage: number, life: number) {
        this.id = idNumber;
        this.description = description;
        this.damage = damage;
        this.life = life;
    }

    isDown(): boolean {
        if (this.life <= 0) return true;
        else return false;
    }

    defendAttack(attackvalue: number): void {
        this.life -= attackvalue;
    }

    attack(Defensible: Defensible): void {
        if (Defensible.isDown()){
            throw new alreadyDownException("Already down!"); 
        } else {
            Defensible.defendAttack(this.damage);
        }
    }
}

class militaryBase {
    id: number;
    coordinateX: number;
    coordinateY: number;
    percentualDamage: number = 0;

    constructor(idNumber: number, coordinateX: number, coordinateY: number, percentualDamage: number) {
        this.id = idNumber;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.percentualDamage = percentualDamage;
    }

    isDown(): boolean {
        if (this.percentualDamage > 0.9) return true;
        else return false;   
    }

    defendAttack(attackvalue: number): void {
        this.percentualDamage -= attackvalue/100;
    }
}

class alreadyDownException extends Error {
    constructor(message: string) {
        super(message);
   }
}

class Army {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    public _power: Array<Defensible> = new Array<Defensible>();

}

class battleField {
    evaluate(army1: Army, army2: Army){
        let count1: number = 0;
        let count2: number = 0;
        for (let i: number = 0; i < army1._power.length; i++) {
            const element = army1._power[i];
            if (element.isDown()) {
                if (element instanceof warrior) count1++;
                else count1 += 3;
            }
        }
        for (let i: number = 0; i < army2._power.length; i++) {
            const element = army2._power[i];
            if (element.isDown()) {
                if (element instanceof warrior) count2++;
                else count2 += 3;
            }
        }
        if (count1 > count2) console.log(`${army2.name} wins!`)
        else if (count1 < count2) console.log(`${army1.name} wins!`)
        else console.log(`Draw!`)
    }
}

let italico: warrior = new warrior(1, 'LOL', 100, 20);
let brito: warrior = new warrior(2, 'Terraria', 50, 10);
let ifpi: militaryBase = new militaryBase(3, 5, 4, 0);
let nextFacebook: Army = new Army(`nEXT fACEBOOK`);

//Exército 1
nextFacebook._power.push(italico);
nextFacebook._power.push(brito);
nextFacebook._power.push(ifpi);

//Exército 2
let ADS: Army = new Army('ADS');
let refeitorio: militaryBase = new militaryBase(3, 5, 4, 0);
let Nicolas: warrior = new warrior(4, 'Aluno', 10, 20);
ADS._power.push(refeitorio);
ADS._power.push(Nicolas);

//Batalha
italico.attack(Nicolas);
brito.attack(refeitorio);

//Result
let fripisa: battleField = new battleField();
fripisa.evaluate(nextFacebook, ADS);