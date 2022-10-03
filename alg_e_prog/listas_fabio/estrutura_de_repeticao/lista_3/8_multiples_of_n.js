import prompt from 'prompt-sync';
import { arithmetic_progression_interval } from '../../../function.js'
const input = prompt()

function main(){

    let [n, inferior_limit, superior_limit] = input('N, Superior Limit and Inferior Limit:').split(' ').map(Number)
    const [first_pa_term, final_pa_term] = arithmetic_progression_interval(inferior_limit, superior_limit, n)

    for(let i = first_pa_term; i <= final_pa_term; i+=n){

        console.log(i)

    }

    let count = first_pa_term
    while(count <= final_pa_term){

        console.log(count)
        count += n

    }
    

}


main()