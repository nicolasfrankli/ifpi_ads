import prompt from 'prompt-sync';
const input = prompt();

function main(){

    for(let i = 1; i <= 10; i++){

       console.log(`${i} X 10 = ${i*10}`)

    } 

    let factor = 1
    while(factor <= 10){

        console.log(`${factor} X 10 = ${factor*10}`)
        factor ++

    }
}


main()