import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const number = input()
    
    let number_of_digits_for = 0
    for (let i = 1; i <= number.length; i++){
        
        number_of_digits_for = i

    }
    console.log(number_of_digits_for)

    let number_of_digits_while = 0
    let count = 1
    while (count <= number.length){

        number_of_digits_while = count
        count++

    }

    console.log(number_of_digits_while)

}


main()