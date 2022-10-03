import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let quantity = Number(input())
    result(quantity)
    
}


function result(quantity){
    for(let i = 0; i < quantity; i++){
        let [n1, n2] = input().split(' ').map(Number)

        if (n2 === 0){
            console.log('divisao impossivel')
        }else{
            console.log((n1 / n2).toFixed(1))
        }
    }
}


main()