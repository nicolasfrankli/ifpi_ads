import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    const number = Number(input('Type a number between 0 and 255:'))
    const num_bin = conversion(number, 2)
    const num_hex = conversion(number, 16)
    console.log(`Binary:${num_bin}
Hex:${num_hex}`)
    
}


function conversion(number, denominator){

    let num = number
    const list_hex = ['A', 'B', 'C', 'D', 'E']
    let rest = ''
    for(let i = 0;num >= denominator;i++){

        if (i > 0){

            num = (num - (num % denominator)) / denominator

        }
        if ((num % denominator) >= 10 && (num % denominator) <= 15 && denominator === 16){

            rest += `${list_hex[num % denominator - 10]}`

        } else {

            rest += `${num % denominator}`

        }

    }
    let new_base_number = ''
    for (let i = rest.length - 1; i >= 0; i--){
        
        new_base_number += rest[i]
        
    }

    return new_base_number
}


main()

