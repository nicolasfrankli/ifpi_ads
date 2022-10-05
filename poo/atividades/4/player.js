var Player = /** @class */ (function () {
    function Player(id_code, strong_number, level_number, score_amount) {
        this.id = id_code;
        this.strong = strong_number;
        this.level = level_number;
        this.score = score_amount;
    }
    Player.prototype.calculateAttack = function () {
        return this.strong * this.level;
    };
    Player.prototype.attack = function (enemy) {
        if (enemy.isAlive()) {
            enemy.score = enemy.score - this.calculateAttack();
        }
    };
    Player.prototype.isAlive = function () {
        if (this.score > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Player.prototype.toString = function () {
        return "".concat(this.id, " ").concat(this.strong, " ").concat(this.level, " ").concat(this.score);
    };
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
        this._players = [];
    }
    Game.prototype.add_player = function (player_number) {
        this._players.push(player_number);
    };
    return Game;
}());
var wordpress = new Game();
var italo = new Player(1, 10, 8, 40);
var emanuel = new Player(2, 10, 8, 80);
italo.attack(emanuel);
console.log(italo.calculateAttack());
console.log(emanuel.score);
console.log(emanuel.isAlive());
