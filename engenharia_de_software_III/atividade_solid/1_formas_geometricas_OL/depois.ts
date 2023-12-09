abstract class Forma {
    abstract calcularArea(): number;
}

class Retangulo extends Forma {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * this.raio ** 2;
    }
}

class CalculadoraArea {
    calcularArea(forma: Forma): number {
        return forma.calcularArea();
    }
}


const retangulo = new Retangulo(5, 10);
const circulo = new Circulo(7);

const calculadora = new CalculadoraArea();

const areaRetangulo = calculadora.calcularArea(retangulo);
const areaCirculo = calculadora.calcularArea(circulo);

console.log(`Área do retângulo: ${areaRetangulo}`);
console.log(`Área do círculo: ${areaCirculo}`);
