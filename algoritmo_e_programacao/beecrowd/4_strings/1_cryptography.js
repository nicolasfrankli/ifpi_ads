import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const number_of_lines = Number(input('Number of Lines:'))
    const functions_list = [first_pass, second_pass, third_pass]
    
    for (let index = 0; index < number_of_lines; index++) {
        let phrase = input()
        for (let i = 0; i < functions_list.length; i++) {
            
            phrase = functions_list[i](phrase)
            
        }
        
        console.log(phrase)
        
    }

}


function first_pass(phrase){
    let encrypted_phrase = ''

    for (let character of phrase) {
        if(is_letter(character)){
            const dec_character = character.charCodeAt(0)
            encrypted_phrase += (String.fromCharCode(dec_character + 3))
         }else{
             encrypted_phrase += character
        }
    }

    return encrypted_phrase

}

function is_letter(character){
    const decimal_character = character.charCodeAt(0)
    return ((65 <= decimal_character && decimal_character <= 90) ||(97 <= decimal_character && decimal_character <= 122))
}


function second_pass(phrase){

    let encrypted_phrase = ''
    
    for (let index = phrase.length - 1; index >= 0; index--) {
        encrypted_phrase += phrase[index]
    }
    
    return encrypted_phrase

}


function third_pass(phrase){

    let encrypted_phrase = ''

    for (let index = 0; index < phrase.length; index++) {
        
        if (index >= Math.trunc(phrase.length / 2)) {
            const dec_character = phrase[index].charCodeAt(0)
            encrypted_phrase += (String.fromCharCode(dec_character - 1))
        } else {
            encrypted_phrase += phrase[index]
        }
        
    }

    return encrypted_phrase

}


main()