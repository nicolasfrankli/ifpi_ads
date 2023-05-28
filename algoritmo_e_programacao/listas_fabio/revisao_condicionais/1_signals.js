import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    get_number("Digite um número com sinal:")
}

function get_number(msg){
    let value = input(msg)
    let value_abs = 0
    if (value[0] == '+'){
        value_abs = Number(value.split('+')[1])
        console.log(`O número ${value} é positivo!`)
    }else if (value[0] == '-'){
        value_abs = Number(value.split('-')[1])
        console.log(`O número ${value} é negativo!`)
    }else {
        console.log('Favor digite um sinal válido')
        value = get_number(msg)
    }
    if (isNaN(value_abs)){
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}

main()