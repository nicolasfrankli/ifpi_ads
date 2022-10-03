import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const numero = input("Digite um numero menor que 1000: ")
    console.log(decompose(numero))

}

function decompose(n){
    const list = n.split('')
    const text = ['centena', 'dezena', 'unidade']
    const plural_text = ['centenas', 'dezenas', 'unidades']
    let output = []
    let index = 0
    
    while (index <= (n.length - 1)){
        if (n.length == 3){
            if (Number(list[index]) > 1){
                output.push(plural_text[index])
            } else if (Number(list[index]) == 1){
                output.push(text[index])
            }
        } else if(n.length == 2){
            if (Number(list[index]) > 1){
                output.push(plural_text[index + 1])
            } else if (Number(list[index]) == 1){
                output.push(text[index + 1])
            }
        } else if(n.length == 1){
            if (Number(list[index]) > 1){
                output.push(plural_text[index + 2])
            } else if (Number(list[index]) == 1){
                output.push(text[index + 2])
            }
        } else {
            break
        } 
        index ++
    }
    if(n.length == 1){
        return `${n} = ${list[0]} ${output[0]}`
    }
    else if(n.length == 2){
        return `${n} = ${list[0]} ${output[0]} e ${list[1]} ${output[1]}`
    }
    else{
        return `${n} = ${list[0]} ${output[0]}, ${list[1]} ${output[1]} e ${list[2]} ${output[2]}`
    }
}
main()