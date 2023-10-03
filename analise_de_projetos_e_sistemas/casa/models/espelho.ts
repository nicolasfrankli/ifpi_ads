import { enumTipoVidro } from '../enums/tipoVidro';
 
export class espelho {
    tipoVidro: enumTipoVidro;
    altura: number;
    largura: number;

    constructor(t: enumTipoVidro, a: number, l: number){
        this.tipoVidro = t;
        this.altura = a;
        this.largura = l;
    }
}