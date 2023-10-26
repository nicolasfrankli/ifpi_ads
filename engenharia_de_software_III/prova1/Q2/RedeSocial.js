"use strict";
exports.__esModule = true;
exports.RedeSocial = void 0;
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
    }
    RedeSocial.prototype.postarMensagem = function (mensagem) {
        if (mensagem == null || mensagem.trim() === ("")) {
            console.log("A mensagem não pode ser vazia...");
            return;
        }
        console.log("Mensagem postada: " + mensagem);
    };
    return RedeSocial;
}());
exports.RedeSocial = RedeSocial;
