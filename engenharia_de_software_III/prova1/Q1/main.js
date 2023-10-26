"use strict";
exports.__esModule = true;
var cliente_1 = require("./cliente");
var pedido_1 = require("./pedido");
var nicolas = new cliente_1.Cliente("Nicolas");
var pedido1 = new pedido_1.Pedido(500, nicolas);
pedido1.processarPedido();
console.log(nicolas.getPedidos());
