import prompt from 'prompt-sync';
const input = prompt();
import { dividers } from '../../../function.js'



function main(){

    let [number1, number2] = input().split(' ').map(Number)
    const dividers_of_number1 = dividers(number1)
    const dividers_of_number2 = dividers(number2)
    
    let mdc_for 
    for (let i1 = 0; i1 < dividers_of_number1.length; i1++){
        
        for (let i2 = 0; i2 < dividers_of_number2.length; i2++){

            if(dividers_of_number1[i1] === dividers_of_number2[i2]){

                mdc_for = dividers_of_number1[i1]
    
            }

        }

    }

    console.log(mdc_for)

    let mdc_while 
    let count1 = 0
    let count2 = 0
    while (count1 < dividers_of_number1.length){

        count2 = 0
        while (count2 < dividers_of_number2.length){

            if(dividers_of_number1[count1] === dividers_of_number2[count2]){

                mdc_while = dividers_of_number1[count1]
    
            }
            
            count2++

        }
        
        count1++

    }

    console.log(mdc_while)
    
}


main()