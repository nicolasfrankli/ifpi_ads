import prompt from 'prompt-sync';
const input = prompt();

function main(){

    const number = Number(input())
    let for_factorial = 1
    for(let i = number; i >= 1; i--){

       for_factorial *= number + 1 - i

    } 
    console.log(for_factorial)


    let factor = number
    let while_factorial = 1
    while(factor >= 1){

        while_factorial *= number + 1 - factor
        factor --

    }
    console.log(while_factorial)
}


main()