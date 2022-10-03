import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [strawberries, apples] = input('Enter the quantity of strawberries and apples (KG):').split(' ').map(Number)
    console.log(price(strawberries, apples))
}

function price(kg_strawberries, kg_apple){
    const price_per_kg_strawberries = [2.50, 2.20]
    const price_per_kg_apple = [1.80, 1.50]
    let total_cost = 0
    if (kg_strawberries <= 5){
        total_cost += price_per_kg_strawberries[0]*kg_strawberries
    } else{
        total_cost += price_per_kg_strawberries[1]*kg_strawberries
    }
    if (kg_apple <= 5){
        total_cost += price_per_kg_apple[0]*kg_apple
    } else{
        total_cost += price_per_kg_apple[1]*kg_apple
    }
    if(kg_apple + kg_strawberries >= 8 || cust > 25){
        total_cost *= 0.9
    }
    return `total_cost: R$${total_cost.toFixed(2)}`
}

main()