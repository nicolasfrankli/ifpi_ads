import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const number_of_containers_for = Number(input('Number of containers:'))
    let cargo_weight_for = 0
    for (let i = 1; i <= number_of_containers_for; i++){

        cargo_weight_for += Number(input('Weight of container:'))

    }
    let passenger_weight_for = 0
    let number_of_passengers_for = 0
    let total_amount_of_baggage_volume_for = 0
    let passenger_data_for
    let ticket_for = 1
    let amount_of_luggage_for = 0
    for (; ticket_for > 0; number_of_passengers_for++){

        passenger_data_for = input('ticket_for and amount of luggages:').split(' ').map(Number)
        ticket_for = passenger_data_for[0]
        amount_of_luggage_for = passenger_data_for[1]
        if (ticket_for !== 0){

            passenger_weight_for += 70 + (10 * amount_of_luggage_for)
            total_amount_of_baggage_volume_for += amount_of_luggage_for

        }

    }
    const possible_amount_of_fuel_for = (500000 - passenger_weight_for - cargo_weight_for)/1.5
    let takeoff_release_for
    if(possible_amount_of_fuel_for >= 10000){

        takeoff_release_for = 'Authorized take-off'

    } else {

        takeoff_release_for = 'Denied take-off'

    }

    console.log(`-------- Franklin´s Airport --------
Number of passengers: ${number_of_passengers_for}
Total Amount of Baggage Volume: ${total_amount_of_baggage_volume_for}
Weight of Passengers: ${passenger_weight_for} Kg
Cargo Weight: ${cargo_weight_for} Kg
Possible amount of fuel: ${possible_amount_of_fuel_for.toFixed(2)} L
${takeoff_release_for}`)

    const number_of_containers_while = Number(input('Number of containers:'))
    let cargo_weight_while = 0
    for (let i = 1; i <= number_of_containers_while; i++){

        cargo_weight_while += Number(input('Weight of container:'))

    }
    let passenger_weight_while = 0
    let number_of_passengers_while = 0
    let total_amount_of_baggage_volume_for_while = 0
    let passenger_data_while
    let ticket_while = 1
    let amount_of_luggage_while = 0
    while (ticket_while > 0){

        passenger_data_while = input('ticket_while and amount of luggages:').split(' ').map(Number)
        ticket_while = passenger_data_while[0]
        amount_of_luggage_while = passenger_data_while[1]
        if (ticket_while !== 0){

            passenger_weight_while += 70 + (10 * amount_of_luggage_while)
            total_amount_of_baggage_volume_for_while += amount_of_luggage_while
            number_of_passengers_while++

        }

    }
    const possible_amount_of_fuel_while = (500000 - passenger_weight_while - cargo_weight_while)/1.5
    let takeoff_release_while
    if(possible_amount_of_fuel_while >= 10000){

        takeoff_release_while = 'Authorized take-off'

    } else {

        takeoff_release_while = 'Denied take-off'

    }

    console.log(`-------- Franklin´s Airport --------
Number of passengers: ${number_of_passengers_while}
Total Amount of Baggage Volume: ${total_amount_of_baggage_volume_for_while}
Weight of Passengers: ${passenger_weight_while} Kg
Cargo Weight: ${cargo_weight_while} Kg
Possible amount of fuel: ${possible_amount_of_fuel_while.toFixed(2)} L
${takeoff_release_while}`)

}


main()