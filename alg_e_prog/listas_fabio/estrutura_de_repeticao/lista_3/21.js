import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_for = 1
    let result_for = 0
    for(let i = 1; i <= 50; i++){

        result_for += number_for/i
        number_for += 2

    }

    console.log(result_for.toFixed(2))

    let count = 1
    let number_while = 1
    let result_while = 0
    while(count <= 50){
        
        result_while += number_while/count
        number_while += 2
        count++

    }

    console.log(result_while.toFixed(2))

}


main()