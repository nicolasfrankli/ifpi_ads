"use strict";
exports.__esModule = true;
var Soma_1 = require("./Soma");
var Subtracao_1 = require("./Subtracao");
var Multiplicacao_1 = require("./Multiplicacao");
var Divisao_1 = require("./Divisao");
var Calculadora = /** @class */ (function () {
    function Calculadora(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculadora.prototype.calcular = function (operacoes) {
        var resultados = [];
        for (var _i = 0, operacoes_1 = operacoes; _i < operacoes_1.length; _i++) {
            var operacao = operacoes_1[_i];
            resultados.push(operacao.executar(this.a, this.b));
        }
        return resultados;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(10, 5);
var operacoes = [new Soma_1.Soma(), new Subtracao_1.Subtracao(), new Multiplicacao_1.Multiplicacao(), new Divisao_1.Divisao()];
var resultados = calculadora.calcular(operacoes);
console.log(resultados);
