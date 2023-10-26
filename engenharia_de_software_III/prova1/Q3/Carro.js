"use strict";
exports.__esModule = true;
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(quantidadeCombustivel) {
        this.capacidadeMaxima = 50; // em litros
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    Carro.prototype.getQuantidadeCombustivel = function () {
        return this.quantidadeCombustivel;
    };
    Carro.prototype.getCapacidadeMaxima = function () {
        return this.capacidadeMaxima;
    };
    Carro.prototype.reabastecerSeNecessario = function (quantidade) {
        if (this.quantidadeCombustivel < this.capacidadeMaxima * 0.1) {
            if ((this.quantidadeCombustivel + quantidade) <= this.capacidadeMaxima) {
                this.quantidadeCombustivel += quantidade;
                console.log("Abastecido!");
            }
            else {
                console.log("Capacidade máxima do tanque ultrapassada.");
            }
        }
    };
    return Carro;
}());
exports.Carro = Carro;
