import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let [n1, n2] = input().split(' ').map(Number)
    let maior
    let menor
    let numeros

    while(n1 > 0 && n2 > 0){

        if (n1 > n2){
            maior = n1
            menor = n2
        }else{
            maior = n2
            menor = n1
        }
        
        let function_output = []

        while (menor <= maior){
            function_output.push(menor)
            menor++
        }

        show_numbers_and_sum_of_list(function_output)

        numeros = input().split(' ').map(Number)
        n1 = numeros[0]
        n2 = numeros[1]
    }
}


function show_numbers_and_sum_of_list(list){
    let line = ''
    let sum = 0
    for(let element of list){
        sum += element
        line += `${element} `
    }
    console.log(`${line}Sum=${sum}`)
}


main()