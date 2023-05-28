import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const number = Number(input())
    
    let number_for = number
    for (let i1 = 0; number_for >= 1; i1++){
        
        number_for /= 2

    }

    console.log(number_for)

    let number_while = number
    while (number_while >=1){

        number_while /= 2

    }

    console.log(number_while)

}


main()