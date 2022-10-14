class Player {
    id: number;
    strong: number;
    level: number;
    score: number;

    constructor(id_code: number, strong_number: number, level_number: number, score_amount: number){
        this.id = id_code;
        this.strong = strong_number;
        this.level = level_number;
        this.score = score_amount;
    }

    calculateAttack(): number{
        return this.strong * this.level;
    }

    attack(enemy: Player): void{
        if(enemy.isAlive()){
            enemy.score = enemy.score - this.calculateAttack();
        }
    }

    isAlive(): boolean{
        if(this.score > 0){
            return true;
        } else {
            return false;
        }
    }

    toString(): String{
        return `${this.id} ${this.strong} ${this.level} ${this.score}`;
    }
}

class Game {
    public _players: Player[] = [];

    add_player(player_number: Player): void {
        this._players.push(player_number)
    }
}

let wordpress: Game = new Game();
let italo: Player = new Player(1, 10, 8, 40);
let emanuel: Player = new Player(2, 10, 8, 80);
italo.attack(emanuel);
console.log(italo.calculateAttack())
console.log(emanuel.score);
console.log(emanuel.isAlive());
