import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    let str = input('Digite uma Letra:')
    console.log(isLetter(str))
}

function isLetter(str){
    for (let letter of 'qwertyuiopasdfghjklçzxcvbnvnm'){
        if (str.length == 1 && letter == str){
            for (let vowel of 'aeiou'){
                if (vowel == str){
                    return `${str} is a vowel!`
                    break
                } else {
                    return `${str} is a consonant!`
                    break
                }
            }
        }
    }
}
main()
