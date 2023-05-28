import prompt from 'prompt-sync';
const input = prompt({sigint: true});


function main(){
    
    let password = Number(input(''))
    
    while(password !== 2002){
        console.log('Senha Invalida')
        password = Number(input(''))
    }
    
    console.log('Acesso Permitido')
}


main()