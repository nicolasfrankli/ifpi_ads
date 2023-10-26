import {Cliente} from "./cliente"
import {Pedido} from "./pedido"

const nicolas = new Cliente("Nicolas")
const pedido1 = new Pedido(500, nicolas)

pedido1.processarPedido();

console.log(nicolas.getPedidos());