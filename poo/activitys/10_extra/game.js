var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var warrior = /** @class */ (function () {
    function warrior(idNumber, description, damage, life) {
        this.life = 10;
        this.id = idNumber;
        this.description = description;
        this.damage = damage;
        this.life = life;
    }
    warrior.prototype.isDown = function () {
        if (this.life <= 0)
            return true;
        else
            return false;
        // switch (this.life) {
        //     case 0:
        //         true;
        //     default:
        //         false;
        // }   
    };
    warrior.prototype.defendAttack = function (attackvalue) {
        this.life -= attackvalue;
    };
    warrior.prototype.attack = function (Defensible) {
        if (Defensible.isDown()) {
            throw new alreadyDownException("Already down!");
        }
        else {
            Defensible.defendAttack(this.damage);
        }
    };
    return warrior;
}());
var militaryBase = /** @class */ (function () {
    function militaryBase(idNumber, coordinateX, coordinateY, percentualDamage) {
        this.percentualDamage = 0;
        this.id = idNumber;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.percentualDamage = percentualDamage;
    }
    militaryBase.prototype.isDown = function () {
        if (this.percentualDamage > 0.9)
            return true;
        else
            return false;
        // switch (this.life) {
        //     case 0:
        //         true;
        //     default:
        //         false;
        // }   
    };
    militaryBase.prototype.defendAttack = function (attackvalue) {
        this.percentualDamage -= attackvalue / 100;
    };
    return militaryBase;
}());
var alreadyDownException = /** @class */ (function (_super) {
    __extends(alreadyDownException, _super);
    function alreadyDownException(message) {
        return _super.call(this, message) || this;
    }
    return alreadyDownException;
}(Error));
var Army = /** @class */ (function () {
    function Army(name) {
        this._power = new Array();
        this.name = name;
    }
    return Army;
}());
var battleField = /** @class */ (function () {
    function battleField() {
    }
    battleField.prototype.evaluate = function (army1, army2) {
        var count1 = 0;
        var count2 = 0;
        for (var i = 0; i < army1._power.length; i++) {
            var element = army1._power[i];
            if (element.isDown()) {
                if (element instanceof warrior)
                    count1++;
                else
                    count1 += 3;
            }
        }
        for (var i = 0; i < army2._power.length; i++) {
            var element = army2._power[i];
            if (element.isDown()) {
                if (element instanceof warrior)
                    count2++;
                else
                    count2 += 3;
            }
        }
        if (count1 > count2)
            console.log("".concat(army2.name, " wins!"));
        else if (count1 < count2)
            console.log("".concat(army1.name, " wins!"));
        else
            console.log("Draw!");
    };
    return battleField;
}());
var italico = new warrior(1, 'LOL', 100, 20);
var emanuela = new warrior(2, 'Terraria', 50, 10);
var ifpi = new militaryBase(3, 5, 4, 0);
var nextFacebook = new Army("nEXT fACEBOOK");
//Ex??rcito 1
nextFacebook._power.push(italico);
nextFacebook._power.push(emanuela);
nextFacebook._power.push(ifpi);
//Ex??rcito 2
var ADS = new Army('ADS');
var refeitorio = new militaryBase(3, 5, 4, 0);
var IGU = new warrior(4, 'FDP', 10, 20);
ADS._power.push(refeitorio);
ADS._power.push(IGU);
//Batalha
italico.attack(IGU);
console.log(IGU.isDown());
emanuela.attack(refeitorio);
//Result
var fripisa = new battleField();
fripisa.evaluate(nextFacebook, ADS);
