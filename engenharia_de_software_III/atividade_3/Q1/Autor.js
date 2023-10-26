"use strict";
exports.__esModule = true;
exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor(i, n, e) {
        this.id = i;
        this.nome = n;
        this.email = e;
    }
    Autor.prototype.getNome = function () {
        return this.nome;
    };
    return Autor;
}());
exports.Autor = Autor;
