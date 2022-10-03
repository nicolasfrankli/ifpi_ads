import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const [number1, number2] = input().split(' ').map(Number)
    let n1 = number1
    let quotient = 0
    for (let i = 1; n1 >= number2; i++){

        n1 -= number2
        quotient = i

    }
    console.log(`${number1} / ${number2} = ${quotient} * ${number2} + ${number1 - quotient * number2}`)

}


main()