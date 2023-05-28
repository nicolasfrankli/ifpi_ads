import { sum_of_terms_of_arithmetic_progression } from '../../../function.js'
import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const final_term = Number(input())
    console.log(sum_of_terms_of_arithmetic_progression(1, final_term, 1))

}


main()