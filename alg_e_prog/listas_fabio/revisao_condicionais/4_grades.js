import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const [grade1, grade2] = input('Type two grades:')
    console.log(isLetter(str))
}

function report(g1, g2){
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
