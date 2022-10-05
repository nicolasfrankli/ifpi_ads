var Salutation = /** @class */ (function () {
    function Salutation(text, destinatary) {
        this.text = text;
        this.destinatary = destinatary;
    }
    Salutation.prototype.getSalutation = function () {
        return "".concat(this.text, " ").concat(this.destinatary);
    };
    return Salutation;
}());
var abacate = new Salutation('Sr.', 'Nicolas');
console.log(abacate.getSalutation());
