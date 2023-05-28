import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const [travelled_distance, amount_of_liters_consumed] = input('Travelled distance and amount of liters consumed:').split(' ').map(Number)
    if (travelled_distance >= 600 && amount_of_liters_consumed >= 50){

        console.log(`The car arrived at its destination, but stopped before arriving due to lack of fuel. Consumption:${(travelled_distance / amount_of_liters_consumed).toFixed(2)}`)

    } 

}


main()