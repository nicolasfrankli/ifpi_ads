import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const number = Number(input('Type a number:'))
    console.log(day(number))
}

function day(number){
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (number <= 8 && number > 0){
        return week[number - 1]
    } else {
        return 'Valor inválido!'
    }
}
main()