import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const number_x = Number(input())
    
    let list_for = new Array()
    let validation_for
    for (let i = 0; !validation_for; i++){
        
        list_for[i] = Number(input())
        if (i > 0){

            validation_for = compare(list_for[i], list_for[i - 1], number_x)

        }

    }
    console.log(list_for)

    let list_while = new Array()
    let validation_while
    let count = 0
    while (!validation_while){
        
        list_while[count] = Number(input())
        if (count > 0){

            validation_while = compare(list_while[count], list_while[count - 1], number_x)

        }
        count++

    }
    console.log(list_while)

}

function compare(number1, number2, number3){

    if(number3 === number2 + number1){

        return true

    }

}

main()