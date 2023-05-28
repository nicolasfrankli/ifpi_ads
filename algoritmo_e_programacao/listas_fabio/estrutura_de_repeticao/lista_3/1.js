import prompt from 'prompt-sync';
const input = prompt();

function main(){

    const n = Number(input())
    for(let i = 1; i <= n; i++){

        console.log(i)

    } 

    let number = 1
    while(number <= n){

        console.log(number)
        number++

    }
}


main()