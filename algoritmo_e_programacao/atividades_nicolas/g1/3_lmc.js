import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let [number1, number2] = input().split(' ').map(Number)
    let lmc = 0
    let count = 2
    while (count % number2 !== 0 || count % number1 !== 0){

        lmc = count
        count++

    }

    console.log(lmc + 1)

}


main()