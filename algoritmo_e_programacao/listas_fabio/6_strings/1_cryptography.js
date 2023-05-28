/*Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.*/
import prompt from 'prompt-sync'
import {invert_string, replace} from '../../string_utils.js'
const input = prompt()


function main(){

    const phrase = input()
    console.log(replace(invert_string(phrase), 'qwrtypsdfghjklzxcvbnmç', '#'))

}


main()