"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
        this.pedidos = [];
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getPedidos = function () {
        return this.pedidos;
    };
    Cliente.prototype.setPedidos = function (pedidos) {
        this.pedidos = pedidos;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
