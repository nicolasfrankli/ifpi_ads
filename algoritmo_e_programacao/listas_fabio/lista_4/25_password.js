import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const pass = Number(input('Type your password:'))
    if(validate_password(pass)){
        console.log(`Allowed access`)
    } else{
        console.log('Access denied')   
    }
}

function validate_password(a){
    if(a == 1234 ){
        return true
    } 
}

main()