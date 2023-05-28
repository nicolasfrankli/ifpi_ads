import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const get_list = input('Enter the type of fuel and the amount of liters:').split(' ')
    const type_fuel = get_list[0].toLowerCase()
    const liters = Number(get_list[1])
    console.log(price(type_fuel, liters))
}

function price(type, liters){
    const price_per_liter_gasoline = 2.50
    const price_per_liter_alcohol = 1.90
    const discount_alcohol = [0.03, 0.05]
    const discount_gasoline = [0.04, 0.06]
    let total_cost = 0
    if(type == 'g'){
        if (liters <= 20){
            total_cost += price_per_liter_gasoline*(1 - discount_gasoline[0])*liters
        } else{
            total_cost += price_per_liter_gasoline*(1 - discount_gasoline[1])*liters
        }
    } else if(type == 'a'){
        if (liters <= 20){
            total_cost += price_per_liter_alcohol*(1 - discount_alcohol[0])*liters
        } else{
            total_cost += price_per_liter_alcohol*(1 - discount_alcohol[1])*liters
        }
    } else {
        return `Entrada inválida!`
    }
    return `total_cost: R$${total_cost.toFixed(2)}`
}

main()