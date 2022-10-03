import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const total_experiments = Number(input(''))
    const output = register(total_experiments)
    console.log(`Total: ${output[0] + output[1] + output[2]} cobaias
Total de coelhos: ${output[0]}
Total de ratos: ${output[1]}
Total de sapos: ${output[2]}
Percentutal de coelhos: ${((output[0]*100)/(output[0] + output[1] + output[2])).toFixed(2)} %
Percentutal de ratos: ${((output[1]*100)/(output[0] + output[1] + output[2])).toFixed(2)} %
Percentutal de sapos: ${((output[2]*100)/(output[0] + output[1] + output[2])).toFixed(2)} %`)
}

function register(quantity){
    let i = 0
    let coelhos = 0
    let ratos = 0
    let sapos = 0
    while(i < quantity){
        const experiment = input().split(' ')
        let test_subject = experiment[1].toLowerCase()
        let num = Number(experiment[0])
        if(test_subject === 'r'){
            ratos+=num
        }else if(test_subject === 'c'){
            coelhos+=num
        } else {
            sapos+=num
        }
        i++
    }
    return [coelhos, ratos, sapos]
}

main()