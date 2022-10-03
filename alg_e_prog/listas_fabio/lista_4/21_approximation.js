import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [int, decimal] = input('Type a decimal number:').split('.').map(Number)
    console.log(approximation(int, decimal))
}

function approximation(a, b){
    if(b > 5){
        return a + 1
    } else {
        return a 
    }
}

main() 