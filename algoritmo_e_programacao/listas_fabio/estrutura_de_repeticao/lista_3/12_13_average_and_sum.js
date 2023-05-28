import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let quantity_of_numbers = Number(input('How many numbers ?'))
    let sum = 0
    let maior_for = 0
    let menor_for = 0

    for(let i = 0; i < quantity_of_numbers; i++){

        let number_for = Number(input())
        if(i === 0){
            
            menor_for = number_for
            maior_for = number_for

        } else if(number_for > maior_for){

            maior_for = number_for

        } else if(number_for < menor_for){

            menor_for = number_for            

        }

        sum += number_for

    }

    console.log(sum, (sum/quantity_of_numbers).toFixed(2), maior_for, menor_for)

    let count = 0
    let while_sum = 0
    let maior_while = 0
    let menor_while = 0
    while(count < quantity_of_numbers){
        
        let number_while = Number(input())

        if(count === 0){
            
            menor_while = number_while
            maior_while = number_while

        } else if(number_while > maior_while){

            maior_while= number_while

        } else if(number_while < menor_while){

            menor_while = number_while           

        }

        while_sum += number_while
        count ++

    }
    
    console.log(while_sum, (while_sum/quantity_of_numbers).toFixed(2), maior_while, menor_while)

}


main()