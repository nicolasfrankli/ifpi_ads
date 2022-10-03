import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [mass, height] = input('Qual a sua massa e altura?').split(' ').map(Number)
    console.log(imc(mass, height))
}

function imc(a, b){
    if(a / (b*b) < 25){
        return `Seu peso é normal.`
    } else if(a / (b*b) > 30){
        return `Você está com obesidade mórbida.`
    } else {
        return `Você está obeso.`
    }
}

main() 