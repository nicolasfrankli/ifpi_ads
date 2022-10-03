import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const get_list = input('What kind of meat and how many kilos will you take? (filet, rump or steak):').split(' ')
    const credit_card = input('Do you have the tabajara card? (S/N)').toLowerCase()
    const type_meat = get_list[0].toLowerCase()
    const kilos = Number(get_list[1])
    price(type_meat, kilos, credit_card)
    console.log(`========= NOTA FISCAL =========\nType of meat: ${type_meat}\nKilos: ${kilos}\nTotal price: R$${price(type_meat, kilos, credit_card)[0]}\nDiscount amount: R$${price(type_meat, kilos, credit_card)[2]}\nPrice: R$${price(type_meat, kilos, credit_card)[1]}
    `)
}

function price(type, kilos, credit_card){
    const price_filet = [4.90, 5.80]
    const price_rump = [5.90, .80]
    const price_steak = [6.90, 7.80]
    let total_cost = 0
    let cost = 0
    let discount = 0
    if(type == 'filet'){
        if (kilos <= 5){
            total_cost += price_filet[0]*kilos
        } else{
            total_cost += price_filet[1]*kilos
        }
    } else if(type == 'rump'){
        if (kilos <= 5){
            total_cost += price_rump[0]*kilos
        } else{
            total_cost += price_rump[1]*kilos
        }
    } else if(type == 'steak'){
        if (kilos <= 5){
            total_cost += price_steak[0]*kilos
        } else{
            total_cost += price_steak[1]*kilos
        }
    } else {
        return `Wrong kind of meat!`
    }
    if(credit_card == 's'){
        discount = (total_cost * 0.05).toFixed(1)
    }
    cost = total_cost - discount
    return [total_cost.toFixed(2), cost.toFixed(2), discount]
}

main()