import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let [number_of_terms, reason, first_term] = input('Number of terms, Reason and first term:').split(' ').map(Number)
    let gp = ''
    for (let i = 1; i <= number_of_terms; i++){

        gp += `${first_term} `
        first_term *= reason

    }
    console.log(gp)

}


main()