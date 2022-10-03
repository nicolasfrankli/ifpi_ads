import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let [number1, number2] = input().split(' ').map(Number)
    let mmc_for = 0
    for (let i = 2; i % number2 !== 0 || i % number1 !== 0; i++){
        
        mmc_for = i

    }

    console.log(mmc_for + 1)
    
    let mmc_while = 0
    let count = 2
    while (count % number2 !== 0 || count % number1 !== 0){

        mmc_while = count
        count++

    }

    console.log(mmc_while + 1)

}


main()