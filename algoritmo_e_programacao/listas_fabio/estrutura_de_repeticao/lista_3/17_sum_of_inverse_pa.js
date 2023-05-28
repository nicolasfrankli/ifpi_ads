import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_terms = Number(input())
    let number_for = 0
    for(let i = 1; i <= number_of_terms; i++){

        number_for += 1/i

    }

    console.log(number_for.toFixed(2))

    let count = 1
    let number_while = 0
    while(count <= number_of_terms){
        
        number_while += 1/count
        count++

    }

    console.log(number_while.toFixed(2))

}


main()