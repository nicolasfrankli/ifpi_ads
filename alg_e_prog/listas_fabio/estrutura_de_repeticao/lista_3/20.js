import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_terms = Number(input())
    let number_for = number_of_terms
    let result_for = 0
    for(let i = 1; i <= number_of_terms; i++){

        if (i % 2 == 0){
            
            result_for -= 1/i

        } else {
            
            result_for += 1/i

        }

        number_for--

    }

    console.log(result_for.toFixed(2))

    let count = 1
    let number_while = number_of_terms
    let result_while = 0
    while(count <= number_of_terms){
        
        if (count % 2 == 0){
            
            result_while -= 1/count

        } else {
            
            result_while += 1/count

        }
        number_while--
        count++

    }

    console.log(result_while.toFixed(2))

}


main()