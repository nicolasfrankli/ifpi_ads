import { casa } from "./models/casa";
import { parede } from "./models/parede";
import { enumAcabamento } from "./enums/tipoAcabamento";
import { telhado } from "./models/telhado";
import { tipoTelha } from "./enums/tipoTelha";
import { espelho } from "./models/espelho";
import { enumTipoVidro } from "./enums/tipoVidro";

let telhadoi = new telhado( 50, tipoTelha.interna )
let telhadoe = new telhado( 50, tipoTelha.externa )

let paredeb = new parede( 2.5, 6, enumAcabamento.Banheiro)
let paredeq = new parede( 2.5, 6, enumAcabamento.Quarto)
let paredec = new parede( 2.5, 6, enumAcabamento.Cozinha)


let espelho1 = new espelho(enumTipoVidro.Temperado, 5, 2)

let casa1 = new casa(telhadoi, telhadoe, paredeb, paredeq, paredec, espelho1);

console.log(casa1);
