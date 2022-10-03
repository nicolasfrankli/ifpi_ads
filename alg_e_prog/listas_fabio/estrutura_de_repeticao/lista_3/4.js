import prompt from 'prompt-sync';
const input = prompt();

function main(){

    const [first_term, limit, reason] = input().split(' ').map(Number)
    for(let i = first_term; i < limit; i *= reason){

        console.log(i)

    } 

    let number = first_term
    while(number < limit){

        console.log(number)
        number *= reason

    }
}


main()