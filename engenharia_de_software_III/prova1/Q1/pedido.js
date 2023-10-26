"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(valorTotal, cliente) {
        this.valorTotal = valorTotal;
        this.cliente = cliente;
    }
    Pedido.prototype.getValorTotal = function () {
        return this.valorTotal;
    };
    Pedido.prototype.getCliente = function () {
        return this.cliente;
    };
    Pedido.prototype.calcularDesconto = function () {
        return this.getValorTotal() * 0.1;
    };
    Pedido.prototype.processarPedido = function () {
        this.valorTotal -= this.calcularDesconto();
        var pedidos = this.cliente.getPedidos();
        pedidos.push(this);
        this.cliente.setPedidos(pedidos);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
