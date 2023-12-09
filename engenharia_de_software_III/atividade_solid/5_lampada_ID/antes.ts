class LampadaA {
    ligar(): void {
        console.log("Lâmpada está ligada");
    }

    desligar(): void {
        console.log("Lâmpada está desligada");
    }
}

class InterruptorDeLuzA {
    private lampada: Lâmpada;

    constructor() {
        this.lampada = new Lâmpada();
    }

    acionar(): void {
        if (this.lampada.ligado) {
            this.lampada.desligar();
        } else {
            this.lampada.ligar();
        }
    }
}

// Exemplo de uso
const interruptorDeLuzA = new InterruptorDeLuzA();
interruptorDeLuz.acionar();
