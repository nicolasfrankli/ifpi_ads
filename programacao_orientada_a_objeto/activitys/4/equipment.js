var Equipment = /** @class */ (function () {
    function Equipment() {
    }
    Equipment.prototype.turnsOn = function () {
        if (this.isOn() === false) {
            this.on = true;
        }
    };
    Equipment.prototype.turnsOff = function () {
        if (this.isOn() === true) {
            this.on = false;
        }
    };
    Equipment.prototype.inverse = function () {
        this.on = !this.on;
    };
    Equipment.prototype.isOn = function () {
        return this.on;
    };
    return Equipment;
}());
var equipment1 = new Equipment();
equipment1.on = true;
console.log(equipment1.isOn());
equipment1.turnsOff();
console.log(equipment1.isOn());
