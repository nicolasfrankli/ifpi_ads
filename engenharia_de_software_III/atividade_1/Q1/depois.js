import prompt from 'prompt-sync';
const input = prompt({sigint: true});

// function main(){
//     get_number("Digite um número com sinal:")
// }

// function get_number(msg){
//     let value = input(msg)
//     let value_abs = 0
//     if (value[0] == '+'){
//         value_abs = Number(value.split('+')[1])
//         console.log(`O número ${value} é positivo!`)
//     }else if (value[0] == '-'){
//         value_abs = Number(value.split('-')[1])
//         console.log(`O número ${value} é negativo!`)
//     }else {
//         console.log('Favor digite um sinal válido')
//         get_number(msg)
//     }
//     if (isNaN(value_abs)){
//         console.log('Favor digite um valor numérico')
//         get_number(msg)
//     }
//     return value
// }

function validate_number(number){
    if (isNaN(number)) {
        console.log('Digite um valor válido')
    }
}

function classify_number(signal){
    if (signal == "+") {
        return "positivo"
    }
    if (signal == "-") {
        return "negativo"
    }
    console.log("Sinal inválido!")
}

function pass_to_number(str){
    const symbol1 = ["+", "-"]

    for (let index = 0; index < symbol.length; index++) {
        const element = symbol[index];
        if (value_str[0] == element) {
            number = Number(value.split(element)[1]) 
            return [number, classify_number]
        } 
        console.log("Sinal numérico inválido!")
    }   
}

function main(){
    let [n, signal] = pass_to_number(input("Digite um número:"))
    console.log(`O número ${n} é ${signal}`)
}



main()