class RetanguloA {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
}

class CirculoA {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }
}

class CalculadoraAreaA {
    calcularAreaA(forma: RetanguloA | CirculoA): number {
        if (forma instanceof RetanguloA) {
            return forma.largura * forma.altura;
        } else if (forma instanceof CirculoA) {
            return 3.14 * forma.raio ** 2;
        }

        throw new Error('Forma não suportada');
    }
}

const retanguloA = new RetanguloA(5, 10);
const circuloA = new CirculoA(7);

const calculadoraA = new CalculadoraAreaA();

const areaRetanguloA = calculadoraA.calcularAreaA(retanguloA);
const areaCirculoA = calculadoraA.calcularAreaA(circuloA);

console.log(`Área do retângulo: ${areaRetangulo}`);
console.log(`Área do círculo: ${areaCirculo}`);

