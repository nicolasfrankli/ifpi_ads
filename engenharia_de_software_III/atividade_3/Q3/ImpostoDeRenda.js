"use strict";
exports.__esModule = true;
var CalculadoraImpostodeRenda_1 = require("./CalculadoraImpostodeRenda");
var RelatorioImpostoDeRenda_1 = require("./RelatorioImpostoDeRenda");
var ImpostoDeRenda = /** @class */ (function () {
    function ImpostoDeRenda(cpfContribuinte, rendimentos, despesas) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }
    ImpostoDeRenda.prototype.processar = function () {
        var calculadora = new CalculadoraImpostodeRenda_1.CalculadoraImpostoDeRenda();
        var impostoDevido = calculadora.calcular(rendimentos, despesas);
        var relatorio = new RelatorioImpostoDeRenda_1.RelatorioImpostoDeRenda();
        relatorio.gerarRelatorio(this.cpfContribuinte, this.rendimentos, this.despesas, impostoDevido);
    };
    return ImpostoDeRenda;
}());
// Exemplo de uso:
var cpf = "12345678901";
var rendimentos = [50000, 20000, 10000];
var despesas = [10000, 5000, 3000];
var declaracao = new ImpostoDeRenda(cpf, rendimentos, despesas);
declaracao.processar();
