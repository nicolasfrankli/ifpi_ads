// import { AuditoriaInterna, Conta, ContaCorrente, SeguroDeVida } from "./banco";

// abstract class ClasseAbstrata {
//     abstract imprimaAlgo(): void ;
// }

// class ClasseConcreta extends  ClasseAbstrata {
//     imprimaAlgo(): void {
//         console.log("Hello");
//     }
// }


// abstract class FiguraGeometrica {
//     abstract calcularArea(): number;
//     abstract calcularPerimetro(): number;
// }

// interface IFiguraGeometrica {
//     calcularArea(): number;
//     calcularPerimetro(): number;
// }

// interface IComparavel {
//     comparar(comparavel: IFiguraGeometrica): number;
// }

// class Quadrado implements IFiguraGeometrica, IComparavel {
//     private _lado: number;

//     constructor(lado: number){
//         this._lado = lado;
//     }
    
//     //pesquisem sobre callback hell e vejam o motivo de eu não ter aninhado if e elses
//     comparar(figuraGeometrica: IFiguraGeometrica): number {
//         if (this.calcularArea() < figuraGeometrica.calcularArea()) {
//             return -1;
//         } 

//         if (this.calcularArea() > figuraGeometrica.calcularArea()) {
//             return 1;
//         } 

//         if (this.calcularArea() == figuraGeometrica.calcularArea()) {
//             return 0;
//         } 

//         return NaN;
//     }

//     calcularArea(): number {
//         return this._lado * this._lado;
//     }

//     calcularPerimetro(): number {
//         return this._lado * 4;
//     }
// }

// class Circulo implements IFiguraGeometrica {
//     private _raio: number;

//     constructor(raio: number) {
//         this._raio = raio;
//     }

//     calcularArea(): number {
//         return Math.PI * this._raio * this._raio;
//     }
//     calcularPerimetro(): number {
//         return 2* Math.PI * this._raio;
//     }

// }

// let circulo: FiguraGeometrica = new Circulo(3);
// console.log(circulo.calcularArea());
// console.log(circulo.calcularPerimetro());


// let figuras: FiguraGeometrica[] = new Array();
// figuras[0] = circulo;


// abstract class Funcionario {
//     private _salario: number;

//     constructor(salario: number) {
//         this._salario = salario;
//     }

//     get salario() : number {
//         return this._salario;
//     }

//     abstract getBonificacao(): number;
// }

// class Gerente extends Funcionario {
//     getBonificacao(): number {
//        return this.salario * 0.40;
//     }
// }

// class Diretor extends Gerente {
//     getBonificacao(): number {
//         return this.salario * 0.60;
//      } 
// }

// class Presidente extends Funcionario {
//     getBonificacao(): number {
//        return 2 * this.salario + 1000;
//     }
// }


// let gerente: Funcionario = new Gerente(1000);
// let diretor: Funcionario = new Diretor(1000);
// let presidente: Funcionario = new Presidente(1000);

// console.log(gerente.getBonificacao());
// console.log(diretor.getBonificacao());
// console.log(presidente.getBonificacao());


// let quadrado: Quadrado = new Quadrado(2);

// console.log(quadrado.comparar(circulo));



// let conta: ContaCorrente = new ContaCorrente("1", 200);
// let seguro1: SeguroDeVida = new SeguroDeVida();
// let seguro2: SeguroDeVida = new SeguroDeVida();

// let auditoriaInterna: AuditoriaInterna = new AuditoriaInterna();
// auditoriaInterna.adicionar(conta);
// auditoriaInterna.adicionar(seguro1);
// auditoriaInterna.adicionar(seguro2);

// console.log(auditoriaInterna.calcularTributos());

