import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const initial_application = Number(input('Initial Application:$'))
    const interest_rate = Number(input('Interest rate:'))

    for (let index = 0; index < 12; index++) {
        
        let amount = initial_application * ((1 + interest_rate) ** index)
        
        const element = array[index];
        
    }
    // M = C(1+I)**t

}


main()