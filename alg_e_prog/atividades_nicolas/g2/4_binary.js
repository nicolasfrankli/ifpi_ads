import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const message = input('Mensagem em Binário: ')

    const isOk = isMessageOk(message)

    if (isOk){
        console.log('sequência de byte_in_decimals OK')
    }else{
        console.log('"Mensagem corrompida: Sequência de byte_in_decimals inválida')
    }

}

function isMessageOk(message){
    const bytes = message.split('-')
    let byte_in_decimal

    for (let byte of bytes){
        byte_in_decimal = binary2decimal(byte)
        if (!isValidCharacter(byte_in_decimal)){
            return false
        }
    }

    return true
}

function binary2decimal(value){
    let decimal = 0
    let digit_value

    for (let i = 0; i < value.length; i++){
        digit_value =  (2 ** (7 - i)) * Number(value[i])
        decimal += digit_value
    }

    return decimal
}

function isValidCharacter(byte_in_decimal){
    return  (isLowerCase(byte_in_decimal) 
        || isANumber(byte_in_decimal) 
        || isBlank(byte_in_decimal))
}

function isLowerCase(value){
    return value >= 97 && value <= 122
}

function isANumber(value){
    return value >= 48 && value <= 57
}

function isBlank(value){
    return value === 32
}

main()