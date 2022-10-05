class Triangle{
    side1: number;
    side2: number;
    side3: number;

    constructor(a: number, b: number, c: number){
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
    }

    isTriangle(){
        if (Math.abs(this.side2 - this.side3) < this.side1 && this.side1 < this.side2 + this.side3){
            return true;
        } else {
            return false;
        }
    }

    ordenedSide(){
        let triangleSides: Array<number> = new Array<number>(this.side1, this.side2, this.side3);
        ordenar_vector_bubble(triangleSides);
        return triangleSides;
    }
    isIsoceles(){
        if (this.isTriangle() && this.side1 == this.side2 || this.side1 == this.side3 || this.side3 == this.side2){
            return true;
        } else {
            return false;
        }
    }
    isEquilateral(){
        if (this.isTriangle() && this.side1 == this.side2 && this.side1 == this.side3){
            return true;
        } else {
            return false;
        }
    }
    isScalene(){
        if (this.isTriangle() && this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3){
            return true;
        } else {
            return false;
        }
    }
    isRight(){
        if (this.isTriangle() && (this.ordenedSide()[2] ** 2) == (this.ordenedSide()[1] ** 2) + this.ordenedSide()[0] ** 2){
            return true;
        } else {
            return false;
        }
    }
}
function ordenar_vector_bubble(vector){

    let houveTroca = false
    let count = 0
    let auxiliar
    let k = 0

    for (let i = 0; i < vector.length - 1; i++){
        houveTroca = false
        for (let j = 0; j < vector.length - 1 - k; j++){
            if (vector[j] > vector[j + 1]){
                houveTroca = true
                auxiliar = vector[j]
                vector[j] = vector[j + 1]
                vector[j + 1] = auxiliar
            }
            count++

        }
        if(!houveTroca){
            break
        }
        k++
    }

    return vector
}
let t1: Triangle = new Triangle(4, 5, 3);
console.log(t1.isRight());
console.log(t1.ordenedSide()[2]);