import { readFileSync } from 'fs'

function main(){
    const purchases = readFileSync('monthlysales.txt', 'utf-8').split('\n')
    let total_revenue = 0
    let total_cashback = 0
    let biggest = -1
    let lowest = -1

    console.log('========= Purchases =========')
    for (let purchase of purchases){
        const data = purchase.split(' ')
        const name = data[0]
        const value = Number(data[1])

        const cashback = generateCashback(value)

        if (biggest === -1){ // the first one will be biggest and lowest
            biggest = cashback
            lowest = cashback
        }else{ // .......
            if (cashback > biggest){
                biggest = cashback
            }else if (cashback < lowest){
                lowest = cashback
            }
        }

        total_revenue += value
        total_cashback += cashback

        console.log(`Customer = ${name} | Amount (R$ ${value.toFixed(2)}) | Cashback = R$ ${cashback.toFixed(2)}`)

    }
    // Data Analysis
    
    const perc_cashback = total_cashback / total_revenue * 100
    const avg_cashback = total_cashback / purchases.length

    console.log(`\n=========== Promotion Analysis ===========
Billing: R$ ${total_revenue.toFixed(2)}
Cashback (total): R$ ${total_cashback.toFixed(2)}
Percentual Cashback: ${perc_cashback.toFixed(1)}%
Biggest Cashback: R$ ${biggest.toFixed(2)}
Lowest Cashback: R$ ${lowest.toFixed(2)}
Average Cashback: R$ ${avg_cashback.toFixed(2)}`)

}


function generateCashback(value){
    let cashback
    if (value <= 250){
        cashback = value * (5/100)
    }else if (value <= 500){
        cashback = value * (7/100)
    }else if (value <= 750){
        cashback = value * (8/100)
    }else{ // > 750
        cashback = 250*(5/100) + 250*(7/100) + 250*(8/100) + (value-750)*(25/100) 
    }

    return cashback
}

main()