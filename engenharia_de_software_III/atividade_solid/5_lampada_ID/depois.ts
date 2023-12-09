interface DispositivoEletrico {
    ligado: any;
    ligar(): void;
    desligar(): void;
}

class Lâmpada implements DispositivoEletrico {
    ligado: any;
    ligar(): void {
        console.log("Lâmpada está ligada");
    }

    desligar(): void {
        console.log("Lâmpada está desligada");
    }
}

class InterruptorDeLuz {
    private dispositivo: DispositivoEletrico;

    constructor(dispositivo: DispositivoEletrico) {
        this.dispositivo = dispositivo;
    }

    acionar(): void {
        if (this.dispositivo.ligado) {
            this.dispositivo.desligar();
        } else {
            this.dispositivo.ligar();
        }
    }
}

// Exemplo de uso
const lâmpada = new Lâmpada();
const interruptorDeLuz = new InterruptorDeLuz(lâmpada);

interruptorDeLuz.acionar();
