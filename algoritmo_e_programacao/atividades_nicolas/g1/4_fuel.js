import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const vehicle_performance_with_alcohol = Number(input('Vehicle performance with alcohol (km per litre):'))
    const vehicle_efficiency_with_gasoline = Number(input('Vehicle efficiency with gasoline (km per litre)'))
    const distance_to_be_covered = Number(input('Distance to be covered:'))
    const [value_per_liter_of_alcohol, value_per_liter_of_gasoline] = input('Values ​​per liter of alcohol and gasoline:').split(' ').map(Number)

    console.log(`Value if using alcohol: R$${value_of_fuel(vehicle_performance_with_alcohol, distance_to_be_covered, value_per_liter_of_alcohol)}
Value if using gasoline: R$${value_of_fuel(vehicle_efficiency_with_gasoline, distance_to_be_covered, value_per_liter_of_gasoline)}`)
}


function value_of_fuel(vehicle_consumption, distance, value_per_liter){

    return ((distance / vehicle_consumption) * value_per_liter).toFixed(2)

}


main()