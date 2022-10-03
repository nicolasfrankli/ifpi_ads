import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const number = input('Type a number:')
    console.log(verify(number))
}

function verify(value){
    const verify_dot = value.split('.')
    if (isNaN(Number(value))){
        return 'Invalid number!'
    } else {
        if(verify_dot.length == 1){
            return `${value} it's an integer`
        } else {
            return `${value} it's an decimal`
        }
    }
}
main()