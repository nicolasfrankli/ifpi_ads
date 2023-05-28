import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    get_letter('Qual o seu gênero (M/F):')
}

function get_letter(msg){
    let string = input(msg).toLowerCase()
    if (string == 'm'){
        console.log(`M - Masculino`)
    }else if (string == 'f'){
        console.log(`F - Feminino!`)
    }else {
        console.log('Sexo Inválido!')
        string = get_letter(msg)
    }
}

main()