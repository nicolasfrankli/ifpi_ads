import { moradia } from './moradia';
import { telhado } from './telhado';
import { parede } from './parede';
import { espelho } from './espelho';


export class casa extends moradia {
    telhadoAreaExterna: telhado;
    telhadoAreaInterna: telhado;
    paredeQuarto: parede;
    paredeCozinha: parede;
    paredeBanheiro: parede;
    EspelhoCorredor: espelho;

    constructor(tae: telhado, tai: telhado, pq: parede, pc: parede, pb: parede, ec: espelho){
        super();
        this.telhadoAreaExterna = tae;
        this.telhadoAreaInterna = tai;
        this.paredeQuarto = pq;
        this.paredeCozinha = pc;
        this.paredeBanheiro = pb;
        this.EspelhoCorredor = ec;
    }
}

