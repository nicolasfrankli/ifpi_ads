"use strict";
exports.__esModule = true;
exports.CalculadoraImpostoDeRenda = void 0;
var CalculadoraImpostoDeRenda = /** @class */ (function () {
    function CalculadoraImpostoDeRenda() {
    }
    CalculadoraImpostoDeRenda.prototype.calcular = function (rendimentos, despesas) {
        var rendaTotal = rendimentos.reduce(function (a, b) { return a + b; }, 0);
        var despesaTotal = despesas.reduce(function (a, b) { return a + b; }, 0);
        var baseCalculo = rendaTotal - despesaTotal;
        if (baseCalculo <= 1903.98) {
            return 0.0;
        }
        if (baseCalculo <= 2826.65) {
            return baseCalculo * 0.075 - 142.80;
        }
        // E assim por diante, para outros intervalos...
        return baseCalculo * 0.275 - 869.36; // Para bc acima de 4664.68
    };
    return CalculadoraImpostoDeRenda;
}());
exports.CalculadoraImpostoDeRenda = CalculadoraImpostoDeRenda;
