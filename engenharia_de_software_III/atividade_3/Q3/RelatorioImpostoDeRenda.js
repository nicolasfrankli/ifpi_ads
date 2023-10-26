"use strict";
exports.__esModule = true;
exports.RelatorioImpostoDeRenda = void 0;
var RelatorioImpostoDeRenda = /** @class */ (function () {
    function RelatorioImpostoDeRenda() {
    }
    RelatorioImpostoDeRenda.prototype.gerarRelatorio = function (cpf, rendimentos, despesas, impostos) {
        console.log("CPF: " + cpf);
        console.log("Rendimentos: " + rendimentos);
        console.log("Despesas: " + despesas);
        console.log("Imposto Devido: " + impostos);
    };
    return RelatorioImpostoDeRenda;
}());
exports.RelatorioImpostoDeRenda = RelatorioImpostoDeRenda;
