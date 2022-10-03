import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const number = Number(input())
    
    let find_number_for = 1
    for (let i = 1; find_number_for !== number; i++){
        
        find_number_for = Number(input())
        if (find_number_for === number){

            console.log(`That is the number!`)

        }

    }

    let find_number_while = 1
    while (find_number_while !== number){

        find_number_while = Number(input())
        if (find_number_while === number){

            console.log(`That is the number!`)

        }

    }

}


main()