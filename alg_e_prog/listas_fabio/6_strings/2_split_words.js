import prompt from 'prompt-sync'
import {replace} from '../../string_utils.js'
const input = prompt()


function main(){

    const phrase = input()

    //2 questão
    for (let word of phrase) {
        
        console.log(word)
        
    }

    //3 questão
    console.log(replace(phrase, ' ', ''))

    //4 questão
    let duplicate_character_phrase = phrase
    for (let character of phrase){

        duplicate_character_phrase = replace(phrase, character, `${character}${character}`)

    }
    console.log(duplicate_character_phrase)

    //5 questão
    let [day, month, year] = input('Date:').split('/').map(Number)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    console.log(`${day} of ${months[month - 1]} of ${year}`)

}


main()