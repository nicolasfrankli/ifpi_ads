import { enumAcabamento } from '../enums/tipoAcabamento';
 
export class parede {
    altura: number;
    largura: number;
    Acabamento: enumAcabamento; 

    constructor(a: number, l: number, ac: enumAcabamento){
        this.altura = a;
        this.largura = l;
        this.Acabamento = ac;
    }
}