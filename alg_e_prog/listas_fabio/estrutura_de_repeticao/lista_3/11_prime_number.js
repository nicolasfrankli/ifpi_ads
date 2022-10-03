import prompt from 'prompt-sync';
import { arithmetic_progression_interval, prime_number } from '../../../function.js'
const input = prompt()

function main(){

    let [inferior_limit, superior_limit] = input('Inferior Limit and Superior Limit:').split(' ').map(Number)
    let [first_pa_term, final_pa_term] = arithmetic_progression_interval(inferior_limit, superior_limit, 1)

    for(let i = first_pa_term; i <= final_pa_term; i++){

        if(prime_number(i)){
            console.log(i)
        }
    }

    let count = first_pa_term
    while(count <= final_pa_term){
        
        if(prime_number(count)){
            console.log(count)
        }
        count ++

    }
    

}


main()