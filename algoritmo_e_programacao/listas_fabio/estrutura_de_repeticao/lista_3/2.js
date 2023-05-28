import prompt from 'prompt-sync';
const input = prompt();

function main(){

    const n = Number(input())
    for(let i = 2; i <= n; i += 2){

        console.log(i)

    } 

    let number = 2
    while(number <= n){

        console.log(number)
        number += 2

    }
}


main()