import prompt from 'prompt-sync';
import { perfect_square_number } from '../../../function.js'
const input = prompt()

function main(){

    let number = Number(input())
    let perfect_square_for = 0

    for(let i = number; i >= 0; i--){
        
        if(perfect_square_number(i)){
            perfect_square_for = i
            i = -1
        }

    }

    console.log(perfect_square_for)

    let count = number
    let perfect_square_while = 0
    while(count >= 0){

        if(perfect_square_number(count)){
            perfect_square_while = count
            count = -1
        }

        count --

    }

    console.log(perfect_square_while)

}


main()