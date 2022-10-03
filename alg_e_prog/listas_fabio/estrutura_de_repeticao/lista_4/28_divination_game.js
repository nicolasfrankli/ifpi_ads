import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const random_number = Math.trunc(Math.random() * 100)
    let number = 0
    let number_of_attempts = 0
    while (random_number !== number){

        number = Number(input())
        if (number < random_number){

            console.log('Maior')
            number_of_attempts++

        } else if(number > random_number){

            console.log('Menor')
            number_of_attempts++

        } else {

            console.log(`${number_of_attempts} attemps.`)

        }

    }

}


main()