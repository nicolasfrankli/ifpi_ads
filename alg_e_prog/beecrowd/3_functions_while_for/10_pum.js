import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const number_of_lines = Number(input())
   
    let first = 1

    for(let i = 0; i < number_of_lines; i++){

        console.log(`${first} ${first + 1} ${first + 2} PUM`)
        first+=4

    }
}

main()