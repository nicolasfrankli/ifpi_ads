import { readFileSync } from 'fs'
import { enter_to_continue, get_number_on_range, get_text } from './input_utils.js'

function main(){
    const [OPTION_MIN, OPTION_MAX] = [0, 5]
    const words = load_words_from_file('palavras.txt')
    const words_qtt = words.length
    console.log(`${words_qtt} carregadas!`)

    show_menu()
    let option = get_number_on_range('> ', OPTION_MIN, OPTION_MAX)

    while (option != 0){

        // work
        if (option === 1){
            show_and_count_words_with_more_than_20_letters(words)
        }else if (option === 2){
            show_and_count_words_without_e(words)
        }else if (option === 3){
            count_words_without_forbidden_letter(words)
        }else if (option === 4){
            show_words_that_uses_mandatory_letters(words)
        }else if (option ===5){
            show_words_that_are_abecedarian(words)
        }
        
        
        enter_to_continue()
        show_menu()
        option = get_number_on_range('> ', OPTION_MIN, OPTION_MAX)
    }

}


function show_menu(){
    let menu = '#### App WordPlay ####'
    menu += '\n1 - Palavras com mais de 20 letras'
    menu += '\n2 - Palavras sem a letra "e"'
    menu += '\n3 - Palavras que evitam letras proibidas'
    menu += '\n4 - Palavras que usam as letras obrigatórias'
    menu += '\n5 - Palavras em ordem alfabética'
    menu += '\n\n0 - Sair'

    console.log(menu)
}

function load_words_from_file(filename){
    const file = readFileSync(filename, {encoding: 'utf-8'})

    const loaded_words = file.split('\n')

    return loaded_words
}

function show_and_count_words_with_more_than_20_letters(words){
    let count = 0
    let total = words.length
    
    for (let word of words){
        if (word.length > 20){
            console.log(word)
            count = count + 1
        }
    }
    
    const percentual = (count/total) * 100

    console.log(`Temos ${count} palavras com mais de 20 letras`)
    console.log(`Percentual: ${percentual.toFixed(3)} %`)
}

function show_and_count_words_without_e(words){
    let count = 0
    const total = words.length
    for (let word of words){
        if (has_no_e(word)){
            console.log(word)
            count++
        }
    }

    const percentual = (count/total) * 100

    console.log(`Temos ${count} palavras sem a letra "e"`)
    console.log(`Percentual: ${percentual.toFixed(3)} %`)
}

function count_words_without_forbidden_letter(words){
    const forbidden_letters = get_text('Letras proibidas: ')
    let count = 0
    let total = words.length
    for (let word of words){
        if (avoids(word, forbidden_letters)){
            console.log(word)
            count++
        }
    }
    const percentual = (count/total) * 100

    console.log(`Temos ${count} palavras sem as letras "${forbidden_letters}"`)
    console.log(`Percentual: ${percentual.toFixed(3)} %`)
}

function show_words_that_uses_mandatory_letters(words){
    const mandatory_letters = get_text('Letras obrigatórias: ')
    let count = 0
    let total = words.length
    for (let word of words){
        if (uses_only(word, mandatory_letters)){
            console.log(word)
            count++
        }
    }
    const percentual = (count/total) * 100

    console.log(`Temos ${count} palavras com as letras "${mandatory_letters}"`)
    console.log(`Percentual: ${percentual.toFixed(3)} %`)
}

function show_words_that_are_abecedarian(words){
    let count = 0
    let total = words.length
    for (let word of words){
        if (is_abecedarian(word)){
            console.log(word)
            count++
        }
    }
    const percentual = (count/total) * 100

    console.log(`Temos ${count} palavras em ordem alfabética.`)
    console.log(`Percentual: ${percentual.toFixed(3)} %`)
}

function has_no_e(word){
    for (let letter of word){
        if (letter === 'e'){
            return false
        }
    }

    return true
}

function avoids(word, forbidden_letters){
    for (let letter of word){
        if (contains(forbidden_letters, letter)){
            return false
        }
    }

    return true
}

function contains(word, letter){
    for (let character of word){ 
        if (character == letter){
            return true
        }
    }
    return false
}

function uses_only(word, mandatory_letters){
    if (contains(word, mandatory_letters)){
        return true
    }
}

function is_abecedarian(word){
    let count = 0
    let a = ''
    for (let letter of word){
        if (letter == word.split('').sort()[count]){
            a += letter
        }
        count++
    }
    if (a == word){
        return true
    }
}

main()
