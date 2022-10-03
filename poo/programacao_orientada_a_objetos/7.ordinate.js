import prompt from 'prompt-sync';
const input = prompt({sigint: true});


function main(){

    let vector = [8, 0, -1, 11, 18, 2, 5, 9, 20]      

    let ordered_vector = ordenar_vector_bubble(vector)

    console.log(ordered_vector)
}


function ordenar_vector_bubble(vector){

    let comparator
    let houveTroca = false
    let count = 0
    let auxiliar
    let k = 0

    for (let i = 0; i < vector.length - 1; i++){
        houveTroca = false
        for (let j = 0; j < vector.length - 1 - k; j++){
            // if (vector[j] < vector[j + 1]){
            if (comparator(vector[j], vector[j + 1])){
                houveTroca = true
                auxiliar = vector[j]
                vector[j] = vector[j + 1]
                vector[j + 1] = auxiliar
                console.log(vector)
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


function is_biggest(valor1, valor2){
    return valor1 > valor2;
}


const is_lowest = (valor1, valor2) => !is_biggest(valor1, valor2)


main()