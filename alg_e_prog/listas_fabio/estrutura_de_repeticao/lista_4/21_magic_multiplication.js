import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const [number1, number2] = input().split(' ').map(Number)
    let n1 = number1
    for (let i = 1; i < number2; i++){

        n1 += number1

    }
    console.log(`${number1} * ${number2} = ${n1}`)

}


main()