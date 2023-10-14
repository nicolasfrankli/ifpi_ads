"use strict";
exports.__esModule = true;
var casa_1 = require("./models/casa");
var parede_1 = require("./models/parede");
var tipoAcabamento_1 = require("./enums/tipoAcabamento");
var telhado_1 = require("./models/telhado");
var tipoTelha_1 = require("./enums/tipoTelha");
var espelho_1 = require("./models/espelho");
var tipoVidro_1 = require("./enums/tipoVidro");
var telhadoi = new telhado_1.telhado(50, tipoTelha_1.tipoTelha.interna);
var telhadoe = new telhado_1.telhado(50, tipoTelha_1.tipoTelha.externa);
var paredeb = new parede_1.parede(2.5, 6, tipoAcabamento_1.enumAcabamento.Banheiro);
var paredeq = new parede_1.parede(2.5, 6, tipoAcabamento_1.enumAcabamento.Quarto);
var paredec = new parede_1.parede(2.5, 6, tipoAcabamento_1.enumAcabamento.Cozinha);
var espelho1 = new espelho_1.espelho(tipoVidro_1.enumTipoVidro.Temperado, 5, 2);
var casa1 = new casa_1.casa(telhadoi, telhadoe, paredeb, paredeq, paredec, espelho1);
console.log(casa1);