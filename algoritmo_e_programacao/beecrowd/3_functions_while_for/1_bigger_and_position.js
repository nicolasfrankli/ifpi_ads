import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const list = input('Type a lot of numbers:').split(' ').map(Number)
    console.log(`${ordenate(list)[0]}\n${ordenate(list)[1]}`)
}

function ordenate(list){
    let i = 0
    let position = 0
    let maior = list[0]
    while(i < 100){
        if(list[i] > maior){
            maior = list[i]
            position = i + 1
        }
        i++
    }
    return [maior, position]
}

main()
