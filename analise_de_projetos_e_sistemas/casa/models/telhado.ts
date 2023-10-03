import { tipoTelha } from '../enums/tipoTelha';
 
export class telhado {
    area: number;
    tipoTelha: tipoTelha; 

    constructor(a: number, b: tipoTelha){
        this.area = a;
        this.tipoTelha = b;
    }
}