import prompt from 'prompt-sync';
import { arithmetic_progression_interval } from '../../../function.js'
const input = prompt()

function main(){

    let [inferior_limit, superior_limit] = input('Inferior Limit and Superior Limit:').split(' ').map(Number)
    let [first_pa_term, final_pa_term] = arithmetic_progression_interval(inferior_limit, superior_limit, 1)

    if(first_pa_term % 2 === 0){
        first_pa_term += 1
    }

    for(let i = first_pa_term; i <= final_pa_term; i+=2){

        console.log(i)

    }

    let count = first_pa_term
    while(count <= final_pa_term){

        console.log(count)
        count += 2

    }
    

}


main()