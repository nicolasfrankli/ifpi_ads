"use strict";
exports.__esModule = true;
exports.Carro1 = void 0;
var Carro1 = /** @class */ (function () {
    function Carro1(quantidadeCombustivel) {
        this.capacidadeMaxima = 50; // em litros
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    Carro1.prototype.getQuantidadeCombustivel = function () {
        return this.quantidadeCombustivel;
    };
    Carro1.prototype.getCapacidadeMaxima = function () {
        return this.capacidadeMaxima;
    };
    Carro1.prototype.reabastecerSeNecessario = function (quantidade) {
        if (this.quantidadeCombustivel >= this.capacidadeMaxima * 0.1) {
            throw new Error("Não é necessário abastecer!");
        }
        if ((this.quantidadeCombustivel + quantidade) > this.capacidadeMaxima) {
            throw new Error("Capacidade máxima do tanque ultrapassada.");
        }
        this.quantidadeCombustivel += quantidade;
        console.log("Abastecido!");
    };
    return Carro1;
}());
exports.Carro1 = Carro1;
