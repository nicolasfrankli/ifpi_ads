"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RendaFixaPrefixada = void 0;
var RendaFixaPrefixada = /** @class */ (function () {
    function RendaFixaPrefixada(id, nome, status, destinacao, taxa, p, t) {
        this.id = id;
        this.nome = nome;
        this.status = status;
        this.destinacao = destinacao;
        this.taxaRentabilidade = taxa;
        this.prazo = p;
        this.taxaAdministracao = t;
    }
    return RendaFixaPrefixada;
}());
exports.RendaFixaPrefixada = RendaFixaPrefixada;
